t.d(n, { default: () => b });
var l = t(627968);
t(64700);
var r = t(980707),
    i = t(477782),
    s = t(442433),
    a = t(803664),
    d = t(239211),
    o = t(308528),
    c = t(928658),
    u = t(978914),
    h = t(375708);
let p = "RestrictedMessageRequestRow";
function b(e) {
    let { user: n, channel: t, onSelect: b, onInteraction: g } = e,
        C = (0, a.A)({ user: n, location: p, addFriendLabel: h.intl.string(h.t["PMsq/b"]) }),
        R = (function (e) {
            let { channel: n } = e,
                { message: t, loaded: r, error: s } = (0, u.I)(n);
            return null == t && (r || s)
                ? null
                : (0, l.jsx)(i.Dr, {
                      id: "report-spam",
                      color: "danger",
                      label: h.intl.string(h.t.HHZmDn),
                      disabled: null == t,
                      action: () => {
                          null != t && (0, c.b8)(t, () => o.A.closePrivateChannel(n.id));
                      },
                  });
        })({ channel: t }),
        k = (0, d.A)({ user: n, channelId: t.id, location: p });
    return (0, l.jsx)(r.W, {
        navId: "message-request-restricted-row",
        onClose: s.Z_,
        "aria-label": h.intl.string(h.t.PdRCRg),
        onSelect: b,
        onInteraction: g,
        children: (0, l.jsxs)(i.rX, { children: [C, R, k] }),
    });
}
