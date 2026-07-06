t.d(n, { A: () => y });
var r = t(627968),
    u = t(64700),
    c = t(688810),
    l = t(355622),
    a = t(408018),
    s = t(138617),
    o = t(195880),
    i = t(95701),
    d = t(562153),
    h = t(183555),
    p = t(448613),
    R = t(652215),
    f = t(375708),
    C = t(831111);
let m = (0, i.createChannelRecord)({ id: "1", type: R.rbe.DM });
function y(e) {
    let { user: n, guildId: t, channelId: i, onClose: R, disableAutoFocus: y = !1 } = e,
        { newestAnalyticsLocation: S } = (0, c.Ay)(),
        { trackUserProfileAction: E } = (0, h.NJ)(),
        [w, A] = u.useState(""),
        [N, k] = u.useState((0, a.x7)(w)),
        _ = u.useRef(!1),
        b = u.useRef(null),
        g = u.useRef(null),
        x = u.useMemo(() => ({ ...l.oU.USER_PROFILE, disableAutoFocus: y }), [y]);
    return (0, r.jsx)(s.Ay, {
        className: C.kL,
        editorClassName: C.EN,
        type: x,
        placeholder: f.intl.formatToPlainString(f.t["0ZQw/X"], { name: d.Ay.getName(t, i, n) }),
        channel: m,
        textValue: w,
        richValue: N,
        onChange: (e, n, t) => {
            n !== w && (A(n), k(t));
        },
        focused: _.current,
        onFocus: () => {
            _.current = !0;
        },
        onBlur: () => {
            _.current = !1;
        },
        onSubmit: async (e) => {
            let { value: t } = e,
                r = t.trim();
            if ("" === r) return { shouldClear: !1, shouldRefocus: !0 };
            (b.current !== r || null == g.current) && ((b.current = r), (g.current = (0, o.m)()));
            try {
                return (
                    E({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, p.p)({
                        userId: n.id,
                        content: r,
                        openChannel: !0,
                        whenReady: !0,
                        location: S,
                        nonce: g.current ?? void 0,
                    }),
                    (b.current = null),
                    (g.current = null),
                    R?.(),
                    { shouldClear: !0, shouldRefocus: !1 }
                );
            } catch {
                return { shouldClear: !1, shouldRefocus: !1 };
            }
        },
    });
}
