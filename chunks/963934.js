i.d(s, { default: () => N });
var e = i(627968),
    c = i(64700),
    a = i(554146),
    n = i(815021),
    r = i(534514),
    d = i(834730),
    l = i(821609),
    o = i(224640),
    m = i(793574),
    g = i(826673),
    h = i(859040),
    b = i(892035),
    x = i(49999),
    p = i(375708),
    E = i(321513);
function N(t) {
    let { onClose: s, ...i } = t,
        N = (0, b.z$)("CollectiblesAnnouncementModal"),
        {
            leftTitle: u,
            leftBody: f,
            rightTitle: j,
            rightBody: v,
        } = (function (t) {
            let { showGiftingMarketing: s, showEaPremiumMarketing: i, showEaNonPremiumMarketing: e } = t,
                c = p.intl.string(p.t.zOtryQ),
                a = p.intl.string(p.t.azn85l);
            return i
                ? {
                      leftTitle: c,
                      leftBody: a,
                      rightTitle: p.intl.string(p.t.oSP2mU),
                      rightBody: p.intl.string(p.t["wEIT/w"]),
                  }
                : e
                  ? {
                        leftTitle: c,
                        leftBody: a,
                        rightTitle: p.intl.string(p.t["y/uSeV"]),
                        rightBody: p.intl.string(p.t.in6xhQ),
                    }
                  : s
                    ? {
                          leftTitle: c,
                          leftBody: a,
                          rightTitle: p.intl.string(p.t.Ky01Mq),
                          rightBody: p.intl.string(p.t.VgVDbe),
                      }
                    : {
                          leftTitle: c,
                          leftBody: a,
                          rightTitle: p.intl.string(p.t["47kRjL"]),
                          rightBody: p.intl.string(p.t.GcXi4M),
                      };
        })(N),
        C = p.intl.string(p.t.W3MtdV),
        y = N.showEaPremiumMarketing
            ? p.intl.string(p.t.RlBdFl)
            : N.showEaNonPremiumMarketing
              ? p.intl.string(p.t.NZe65e)
              : p.intl.string(p.t["v72/pr"]),
        M = N.isEarlyAccess
            ? "https://cdn.discordapp.com/assets/content/2b8d1bb8d5327e224dfc61673a13dd19c15d10b259957967f99e218b2fa327dc.jpg"
            : "https://cdn.discordapp.com/assets/content/11291cccd863aec5bdb14c12e39a1a819efd0f35e936df7a7f378e5ae7163ba1.jpg",
        S = N.isEarlyAccess
            ? "https://cdn.discordapp.com/assets/content/9686f15252ecb5680ebf6ec2bbadb6b0bfc0930ce66ac6c32806a5b03b06239c.png"
            : "https://cdn.discordapp.com/assets/content/2bb166dbf77210787f33f8dc4edae14c3b9662a615c8e7f7b694e96e6875702f.png",
        L = c.useRef(!1);
    c.useEffect(
        () => () => {
            L.current || (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: x.i.AUTO_DISMISS });
        },
        [],
    );
    let A = c.useCallback(async () => {
            (L.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: x.i.USER_DISMISS }),
                await s();
        }, [s]),
        T = c.useCallback(async () => {
            (L.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: x.i.TAKE_ACTION }),
                (0, h.Cz)({ analyticsLocations: [], analyticsSource: m.A.COLLECTIBLES_SHOP }),
                await s();
        }, [s]);
    return (0, e.jsx)(o.d, {
        ...i,
        onClose: A,
        size: "lg",
        children: (0, e.jsxs)("div", {
            className: E.Qs,
            children: [
                (0, e.jsx)("div", { className: E.Tp, style: { backgroundImage: `url(${M})` } }),
                (0, e.jsx)("div", {
                    className: E.b,
                    children: (0, e.jsx)(n.J, { onClick: A, variant: "overlay-secondary" }),
                }),
                (0, e.jsxs)("div", {
                    className: E.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: E.gn,
                            children: [
                                (0, e.jsx)(r.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: E.DD,
                                    children: C,
                                }),
                                (0, e.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: y }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: E.kR,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: E.Nr,
                                    children: [
                                        (0, e.jsx)("img", { src: S, alt: "", className: E.wP }),
                                        (0, e.jsxs)("div", {
                                            className: E.Mo,
                                            children: [
                                                (0, e.jsx)(r.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: u,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: f,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsxs)("div", {
                                    className: E.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ac2f61afc0a4de0533067bef49b716c95e9b05bba9ec10ffa634c5ed9662a533.png",
                                            alt: "",
                                            className: E.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: E.Mo,
                                            children: [
                                                (0, e.jsx)(r.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: j,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: v,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, e.jsx)("div", {
                            className: E.UD,
                            children: (0, e.jsx)(l.$, {
                                variant: "primary",
                                text: p.intl.string(p.t.c7U9yf),
                                onClick: T,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
