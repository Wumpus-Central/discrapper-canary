var r = n(621796),
    i = n(172367),
    a = n(147521),
    o = n(574369),
    s = n(805797),
    l = n(169774),
    c = n(352582),
    u = n(476363),
    d = n(963782),
    f = n(904112),
    _ = n(727813),
    p = n(599552),
    h = n(544611),
    m = n(803068),
    g = n(561099),
    E = n(655000),
    b = n(920267),
    y = a.isOptionKeyCommand,
    O = l.isBrowser('Chrome');
function v(e, t, n) {
    switch (e) {
        case 'redo':
            return i.redo(t);
        case 'delete':
            return g(t);
        case 'delete-word':
            return f(t);
        case 'backspace':
            return m(t);
        case 'backspace-word':
            return d(t);
        case 'backspace-to-start-of-line':
            return u(t, n);
        case 'split-block':
            return _(t);
        case 'transpose-characters':
            return E(t);
        case 'move-selection-to-start-of-block':
            return h(t);
        case 'move-selection-to-end-of-block':
            return p(t);
        case 'secondary-cut':
            return s.cut(t);
        case 'secondary-paste':
            return s.paste(t);
        default:
            return t;
    }
}
e.exports = function (e, t) {
    var n = t.which,
        a = e._latestEditorState;
    function s(n) {
        var r = e.props[n];
        return !!r && (r(t), !0);
    }
    switch (n) {
        case o.RETURN:
            if ((t.preventDefault(), e.props.handleReturn && c(e.props.handleReturn(t, a)))) return;
            break;
        case o.ESC:
            if ((t.preventDefault(), s('onEscape'))) return;
            break;
        case o.TAB:
            if (s('onTab')) return;
            break;
        case o.UP:
            if (s('onUpArrow')) return;
            break;
        case o.RIGHT:
            if (s('onRightArrow')) return;
            break;
        case o.DOWN:
            if (s('onDownArrow')) return;
            break;
        case o.LEFT:
            if (s('onLeftArrow')) return;
            break;
        case o.SPACE:
            O && y(t) && t.preventDefault();
    }
    var l = e.props.keyBindingFn(t);
    if (null == l || '' === l) {
        if (n === o.SPACE && O && y(t)) {
            var u = r.replaceText(a.getCurrentContent(), a.getSelection(), '\xA0');
            e.update(i.push(a, u, 'insert-characters'));
        }
        return;
    }
    if ('undo' === l) return void b(t, a, e.update);
    if ((t.preventDefault(), !(e.props.handleKeyCommand && c(e.props.handleKeyCommand(l, a, t.timeStamp))))) {
        var d = v(l, a, t);
        d !== a && e.update(d);
    }
};
