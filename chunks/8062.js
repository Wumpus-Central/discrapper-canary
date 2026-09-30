n.d(t, { a: () => A, y: () => I });
var i = n(176781),
    r = n(173936),
    a = n(606096),
    s = n(406810),
    l = n(152367),
    o = n(27232),
    d = n(292801),
    c = n(849516),
    u = n(661531),
    _ = n(652215),
    E = n(97483);
let A = {
        [_.BRT.APP]: "app",
        [_.BRT.OVERLAY]: "overlay",
        [_.BRT.POPOUT]: "popout",
        [_.BRT.CALL_TILE_POPOUT]: "call-tile-popout",
    },
    h = {
        [E.Ck.CLIP]: { icon: i.x },
        [E.Ck.LINK]: { icon: r.LinkIcon },
        [E.Ck.BOOKMARK]: { icon: a.BookmarkIcon },
        [E.Ck.CLOCK]: { icon: s.ClockIcon },
        [E.Ck.AI]: { icon: l.D },
        [E.Ck.FAVORITE]: { icon: o.StarIcon },
        [E.Ck.FORWARD]: { icon: d.t, color: u.A.colors.ICON_FEEDBACK_POSITIVE },
        [E.Ck.INVITE]: { icon: c.u, color: u.A.colors.ICON_BRAND },
    };
function I(e) {
    let { message: t, type: n, options: i } = e;
    if (i?.component != null) return null;
    let r = {
        surface: A[i?.appContext ?? _.BRT.APP],
        position: i?.position === E.xJ.BOTTOM ? "bottom" : "top",
        duration: i?.duration,
    };
    switch (n) {
        case E.Ck.SUCCESS:
            return { ...r, text: t, variant: "success" };
        case E.Ck.FAILURE:
            return { ...r, text: t, variant: "critical" };
        default: {
            let e = h[n];
            if (null == e) return { ...r, text: t, variant: "default" };
            return { ...r, text: t, variant: "default", icon: e.icon, iconColor: e.color };
        }
    }
}
