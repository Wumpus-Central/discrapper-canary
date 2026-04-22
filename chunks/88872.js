"use strict";
l.d(t, { default: () => g });
var i = l(627968),
    r = l(64700),
    n = l(189213),
    a = l(450507),
    s = l(192308),
    o = l(256311),
    c = l(954571),
    d = l(824611),
    u = l(45813),
    _ = l(559868),
    h = l(652215),
    p = l(985018);
class m extends r.PureComponent {
    maxScrolledPercentage = 0;
    mountedAt = 0;
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(h.HAw.CHANGE_LOG_OPENED, {}, !0);
    }
    close = () => ((0, s.closeModal)(_.lb), Promise.resolve());
    handleScroll = (e) => {
        let { offsetHeight: t, scrollHeight: l, scrollTop: i } = e.getScrollerState();
        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, i / (l - t)), 1);
    };
    track = (() => {
        var e = this;
        return function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                { changeLog: r } = e.props,
                { date: n, revision: a } = r,
                s = { change_log_id: `${n}:${a}`, ...l };
            i ||
                (s = {
                    seconds_open: Math.round((Date.now() - e.mountedAt) / 1e3),
                    max_scrolled_percentage: 100 * parseInt(e.maxScrolledPercentage.toPrecision(4), 10),
                    ...s,
                }),
                c.default.track(t, s);
        };
    })();
    componentWillUnmount() {
        this.track(h.HAw.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, i.jsx)(u.A, {
            ...this.props,
            changeLog: this.props.changeLog,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track,
        });
    }
}
function g(e) {
    let { changelog: t, loaded: l, clientTooOld: s } = (0, d.J)();
    if (
        (r.useEffect(() => {
            if (l && null != t) return () => o.A.markChangelogAsSeen(t.id, t.date);
        }, [l, t]),
        s)
    )
        return (0, i.jsx)(n.Modal, {
            title: p.intl.string(p.t.V9ospk),
            actions: [{ text: p.intl.string(p.t.BddRzS), onClick: e.onClose }],
            ...e,
        });
    if (null == t)
        if (l)
            return (0, i.jsx)(n.Modal, {
                title: p.intl.string(p.t.O1iRT8),
                actions: [{ text: p.intl.string(p.t.BddRzS), onClick: e.onClose }],
                ...e,
            });
        else return (0, a.A)(e);
    return (0, i.jsx)(m, { ...e, changeLog: t });
}
