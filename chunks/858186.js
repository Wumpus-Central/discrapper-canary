var n = r(166763),
    i = r(133092),
    o = r(219300),
    a = r(574369),
    u = r(717021),
    s = r(169774),
    c = r(638242),
    l = r(283852),
    f = r(115129),
    p = r(357062),
    h = r(100946),
    d = r(34399),
    g = r(157202),
    y = r(473552),
    v = r(634523),
    m = r(302648),
    _ = r(288797),
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
