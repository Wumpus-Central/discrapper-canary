var n = r(621796),
    i = r(172367),
    o = r(147521),
    a = r(574369),
    u = r(805797),
    s = r(169774),
    c = r(352582),
    l = r(476363),
    f = r(963782),
    p = r(904112),
    h = r(727813),
    d = r(599552),
    g = r(544611),
    y = r(803068),
    v = r(561099),
    m = r(655000),
    _ = r(920267),
    b = o.isOptionKeyCommand,
    S = s.isBrowser('Chrome');
t.exports = function (t, e) {
    var r = e.which,
        o = t._latestEditorState;
    function s(r) {
        var n = t.props[r];
        return !!n && (n(e), !0);
    }
    switch (r) {
        case a.RETURN:
            if ((e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o)))) return;
            break;
        case a.ESC:
            if ((e.preventDefault(), s('onEscape'))) return;
            break;
        case a.TAB:
            if (s('onTab')) return;
            break;
        case a.UP:
            if (s('onUpArrow')) return;
            break;
        case a.RIGHT:
            if (s('onRightArrow')) return;
            break;
        case a.DOWN:
            if (s('onDownArrow')) return;
            break;
        case a.LEFT:
            if (s('onLeftArrow')) return;
            break;
        case a.SPACE:
            S && b(e) && e.preventDefault();
    }
    var w = t.props.keyBindingFn(e);
    if (null == w || '' === w) {
        if (r === a.SPACE && S && b(e)) {
            var x = n.replaceText(o.getCurrentContent(), o.getSelection(), '\xA0');
            t.update(i.push(o, x, 'insert-characters'));
        }
        return;
    }
    if ('undo' === w) return void _(e, o, t.update);
    if ((e.preventDefault(), !(t.props.handleKeyCommand && c(t.props.handleKeyCommand(w, o, e.timeStamp))))) {
        var k = (function (t, e, r) {
            switch (t) {
                case 'redo':
                    return i.redo(e);
                case 'delete':
                    return v(e);
                case 'delete-word':
                    return p(e);
                case 'backspace':
                    return y(e);
                case 'backspace-word':
                    return f(e);
                case 'backspace-to-start-of-line':
                    return l(e, r);
                case 'split-block':
                    return h(e);
                case 'transpose-characters':
                    return m(e);
                case 'move-selection-to-start-of-block':
                    return g(e);
                case 'move-selection-to-end-of-block':
                    return d(e);
                case 'secondary-cut':
                    return u.cut(e);
                case 'secondary-paste':
                    return u.paste(e);
                default:
                    return e;
            }
        })(w, o, e);
        k !== o && t.update(k);
    }
};
