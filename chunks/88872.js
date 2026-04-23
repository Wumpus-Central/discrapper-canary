"use strict";
l.d(t, { default: () => g });
var a = l(627968),
    n = l(64700),
    r = l(189213),
    s = l(450507),
    i = l(192308),
    o = l(256311),
    d = l(954571),
    c = l(824611),
    u = l(45813),
    _ = l(559868),
    m = l(652215),
    p = l(985018);
class h extends n.PureComponent {
    maxScrolledPercentage = 0;
    mountedAt = 0;
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(m.HAw.CHANGE_LOG_OPENED, {}, !0);
    }
    close = () => ((0, i.closeModal)(_.lb), Promise.resolve());
    handleScroll = (e) => {
        let { offsetHeight: t, scrollHeight: l, scrollTop: a } = e.getScrollerState();
        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, a / (l - t)), 1);
    };
    track = (() => {
        var e = this;
        return function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                { changeLog: n } = e.props,
                { date: r, revision: s } = n,
                i = { change_log_id: `${r}:${s}`, ...l };
            a ||
                (i = {
                    seconds_open: Math.round((Date.now() - e.mountedAt) / 1e3),
                    max_scrolled_percentage: 100 * parseInt(e.maxScrolledPercentage.toPrecision(4), 10),
                    ...i,
                }),
                d.default.track(t, i);
        };
    })();
    componentWillUnmount() {
        this.track(m.HAw.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, a.jsx)(u.A, {
            ...this.props,
            changeLog: this.props.changeLog,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track,
        });
    }
}
function g(e) {
    let { changelog: t, loaded: l, clientTooOld: i } = (0, c.J)();
    if (
        (n.useEffect(() => {
            if (l && null != t) return () => o.A.markChangelogAsSeen(t.id, t.date);
        }, [l, t]),
        i)
    )
        return (0, a.jsx)(r.Modal, {
            title: p.intl.string(p.t.V9ospk),
            actions: [{ text: p.intl.string(p.t.BddRzS), onClick: e.onClose }],
            ...e,
        });
    if (null == t)
        if (l)
            return (0, a.jsx)(r.Modal, {
                title: p.intl.string(p.t.O1iRT8),
                actions: [{ text: p.intl.string(p.t.BddRzS), onClick: e.onClose }],
                ...e,
            });
        else return (0, s.A)(e);
    return (0, a.jsx)(h, { ...e, changeLog: t });
}
