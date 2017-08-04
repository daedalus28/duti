let _ = require('lodash/fp')
let { log, fileNameFromPath } = require('../utils')

let messageTemplate = message => `
  <strong>${message.message}</strong>
  <code>Line ${message.line}: ${message.source.trim()}</code>
`
let formatLintMessages = messages =>
  _.flow(_.map(messageTemplate), _.join('\n'))(messages)

let lintTemplate = (lint, severity) => `
<details>
  <summary>${fileNameFromPath(lint.filePath)}</summary>
  <p>Full Path: <code>${lint.filePath}</code></p>
  ${formatLintMessages(_.filter(m => m.severity === severity, lint.messages))}
</details>`

let formatLint = (lintRes, severity) =>
  _.flow(
    _.filter(
      lint =>
        !_.isEmpty(lint.messages) &&
        _.some(m => m.severity === severity, lint.messages),
    ),
    _.map(lint => lintTemplate(lint, severity)),
    _.join(''),
  )(lintRes)

let hasLintErrors = ({ lintResults, fail }) => {
  if (lintResults && lintResults.reduce((a, c) => a + c.errorCount, 0) > 0) {
    log(fail)(
      `Your PR has lint errors. Please fix these and commit them.
      ${formatLint(lintResults, 2)}`,
    )
  }
}

let hasLintWarnings = ({ lintResults, warn }) => {
  if (lintResults && lintResults.reduce((a, c) => a + c.warningCount, 0) > 0) {
    log(warn)(
      `Your PR has lint warnings. Please consider fixing these.
      ${formatLint(lintResults, 1)}`,
    )
  }
}

module.exports = {
  hasLintErrors,
  hasLintWarnings,
}
