/*package annotator.ui.issue */
"use strict";

var util = require('../util');

var $ = util.$;
var _t = util.gettext;

/**
 * function:: editorExtension(editor)
 *
 * An extension for the :class:`~annotator.ui.editor.Editor` that allows
 * editing a set of space-delimited tags, retrieved from and saved to the
 * annotation's ``tags`` property.
 *
 * **Usage**::
 *
 *     app.include(annotator.ui.main, {
 *         viewerExtensions: [annotator.ui.tags.viewerExtension]
 *     })
 */
exports.editorExtension = function editorExtension(editor) {
    // The input element added to the Annotator.Editor wrapped in jQuery.
    // Cached to save having to recreate it everytime the editor is displayed.
    var field = null;
    var checkbox = null;

    function updateField(field, annotation) {
        annotation.issue = false;
    }

    function setIssueBoolean(field, annotation) {
        annotation.issue = checkbox.is(":checked");
    }

    field = editor.addField({
        label: _t("Open an issue?") + "\u2026",
        id: "annotator-field-issue",
        submit: setIssueBoolean,
        type: "checkbox"
    });

    checkbox = $(field).find(":checkbox");
};
