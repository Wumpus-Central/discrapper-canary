a.d(i, { default: () => j }), a(388685), a(953529);
var t = a(200651),
    s = a(192379),
    n = a(120356),
    l = a.n(n),
    o = a(481060),
    r = a(313201),
    m = a(309081),
    d = a(35463),
    c = a(489887),
    h = a(388032),
    u = a(787791);
let x = (0, r.hQ)();
function j(e) {
    var i;
    let { channelId: a, answer: n, onSave: r, transitionState: j, onClose: _ } = e,
        {
            emoji: g,
            hasUpload: p,
            upload: k,
            mediaUrl: v,
            mediaFilename: w
        } = (0, d.Z)({
            channelId: a,
            localCreationAnswerId: n.localCreationAnswerId,
            image: n.image
        }),
        [C, z] = s.useState(null != (i = null == k ? void 0 : k.description) ? i : '');
    return (0, t.jsxs)(o.Y0X, {
        size: o.CgR.DYNAMIC,
        className: l()(u.modal, {
            [u.hasImage]: p,
            [u.hasEmoji]: null != g
        }),
        transitionState: j,
        'aria-label': h.intl.string(h.t.QbhHBQ),
        children: [
            (0, t.jsx)(m.I, {
                hasUpload: p,
                mediaUrl: v,
                mediaFilename: w,
                imageClassName: u.imagePreview,
                emoji: g,
                emojiClassName: u.emojiPreview
            }),
            (0, t.jsxs)(o.hzk, {
                className: u.content,
                children: [
                    (0, t.jsx)(o.vwX, {
                        tag: o.RB0.LABEL,
                        htmlFor: x,
                        children: h.intl.string(h.t['/2Gnoa'])
                    }),
                    (0, t.jsx)(o.oil, {
                        id: x,
                        value: C,
                        inputClassName: u.input,
                        onChange: z,
                        maxLength: c.WA,
                        autoFocus: !0
                    })
                ]
            }),
            (0, t.jsxs)(o.mzw, {
                className: u.footer,
                children: [
                    (0, t.jsx)(o.zxk, {
                        look: o.iLD.FILLED,
                        size: o.zxk.Sizes.MEDIUM,
                        onClick: () => {
                            null != C && r(C), _();
                        },
                        children: (0, t.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            children: h.intl.string(h.t.R3BPHx)
                        })
                    }),
                    (0, t.jsx)(o.zxk, {
                        look: o.iLD.LINK,
                        size: o.zxk.Sizes.MEDIUM,
                        onClick: _,
                        children: (0, t.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            children: h.intl.string(h.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
}
