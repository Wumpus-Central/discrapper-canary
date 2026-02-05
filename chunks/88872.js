l.d(t, { default: () => b });
var n = l(627968),
    d = l(64700),
    a = l(158954),
    r = l(450507),
    o = l(397927),
    i = l(256311),
    s = l(954571),
    c = l(824611),
    _ = l(45813),
    m = l(559868),
    h = l(652215),
    u = l(985018);
class g extends d.PureComponent {
    maxScrolledPercentage = 0;
    mountedAt = 0;
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(h.HAw.CHANGE_LOG_OPENED, {}, !0);
    }
    close = () => ((0, o.OoC)(m.lb), Promise.resolve());
    handleScroll = (e) => {
        let { offsetHeight: t, scrollHeight: l, scrollTop: n } = e.getScrollerState();
        this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (l - t)), 1);
    };
    track = (() => {
        var e = this;
        return function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                { changeLog: d } = e.props,
                { date: a, revision: r } = d,
                o = { change_log_id: `${a}:${r}`, ...l };
            n ||
                (o = {
                    seconds_open: Math.round((Date.now() - e.mountedAt) / 1e3),
                    max_scrolled_percentage: 100 * parseInt(e.maxScrolledPercentage.toPrecision(4), 10),
                    ...o,
                }),
                s.default.track(t, o);
        };
    })();
    componentWillUnmount() {
        this.track(h.HAw.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, n.jsx)(_.A, {
            ...this.props,
            changeLog: this.props.changeLog,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track,
        });
    }
}
function b(e) {
    let { changelog: t, loaded: l, clientTooOld: o } = (0, c.J)();
    if (
        (d.useEffect(() => {
            if (l && null != t) return () => i.A.markChangelogAsSeen(t.id, t.date);
        }, [l, t]),
        o)
    )
        return (0, n.jsx)(a.Modal, {
            title: u.intl.string(u.t.V9ospk),
            actions: [{ text: u.intl.string(u.t.BddRzS), onClick: e.onClose }],
            ...e,
        });
    if (null == t)
        if (l)
            return (0, n.jsx)(a.Modal, {
                title: u.intl.string(u.t.O1iRT8),
                actions: [{ text: u.intl.string(u.t.BddRzS), onClick: e.onClose }],
                ...e,
            });
        else return (0, r.A)(e);
    return (0, n.jsx)(g, { ...e, changeLog: t });
}
