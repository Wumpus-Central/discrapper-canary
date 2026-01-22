n.d(t, { J: () => f });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(573435),
    s = n(427157),
    o = n(71393),
    c = n(961291),
    u = n(192849);
let d = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: u.tK,
                  style: { backgroundColor: t.color.css },
                  children: (0, r.jsx)("img", {
                      className: u.QR,
                      alt: "",
                      src: t.icon,
                  }),
              });
    },
    f = l.memo(function (e) {
        var t, n;
        let { item: l } = e,
            f = null,
            p = !1,
            h = (0, i.bG)([o.A], () => o.A.getGuild(l.guild_id));
        if (null != l.icon_name)
            f = (0, r.jsx)("img", {
                alt: "",
                src: c.rr[(0, c.yI)(l.icon_name)],
            });
        else if (null != l.other_user) {
            let e = l.other_user instanceof s.A ? l.other_user : new s.A(l.other_user),
                n = null != (t = e.globalName) ? t : e.username;
            (f = (0, r.jsx)("img", {
                alt: n,
                className: u.Sl,
                src: e.getAvatarURL(void 0, 40),
            })),
                (p = !0);
        } else
            f =
                null != l.icon_url
                    ? (0, r.jsx)("img", {
                          alt: null != (n = null == h ? void 0 : h.name) ? n : "",
                          className: u.Sl,
                          src: l.icon_url,
                      })
                    : (0, r.jsx)("img", {
                          alt: "",
                          src: c.rr[(0, c.sW)(l)],
                      });
        let b = (0, c.rS)(l.type);
        return (0, r.jsxs)("div", {
            className: u.kL,
            children: [
                (0, r.jsx)(a.Ay, {
                    mask: null == b ? a.hW.AVATAR_DEFAULT : a.hW.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: u.dK,
                    children: (0, r.jsx)("div", {
                        className: u.ZS,
                        style: p ? void 0 : { backgroundColor: (0, c.Pm)(l) },
                        children: f,
                    }),
                }),
                (0, r.jsx)(d, { mask: b }),
            ],
        });
    });
