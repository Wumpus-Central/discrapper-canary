"use strict";
n.d(t, { J: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(573435),
    a = n(427157),
    o = n(71393),
    c = n(961291),
    d = n(192849);
let u = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)("div", {
                  className: d.tK,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)("img", { className: d.QR, alt: "", src: t.icon }),
              });
    },
    h = s.memo(function (e) {
        let { item: t } = e,
            n = null,
            s = !1,
            h = (0, l.bG)([o.A], () => o.A.getGuild(t.guild_id));
        if (null != t.icon_name) n = (0, i.jsx)("img", { alt: "", src: c.rr[(0, c.yI)(t.icon_name)] });
        else if (null != t.other_user) {
            let e = t.other_user instanceof a.A ? t.other_user : new a.A(t.other_user),
                l = e.globalName ?? e.username;
            (n = (0, i.jsx)("img", { alt: l, className: d.Sl, src: e.getAvatarURL(void 0, 40) })), (s = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, i.jsx)("img", { alt: h?.name ?? "", className: d.Sl, src: t.icon_url })
                    : (0, i.jsx)("img", { alt: "", src: c.rr[(0, c.sW)(t)] });
        let A = (0, c.rS)(t.type);
        return (0, i.jsxs)("div", {
            className: d.kL,
            children: [
                (0, i.jsx)(r.Ay, {
                    mask: null == A ? r.hW.AVATAR_DEFAULT : r.hW.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: d.dK,
                    children: (0, i.jsx)("div", {
                        className: d.ZS,
                        style: s ? void 0 : { backgroundColor: (0, c.Pm)(t) },
                        children: n,
                    }),
                }),
                (0, i.jsx)(u, { mask: A }),
            ],
        });
    });
