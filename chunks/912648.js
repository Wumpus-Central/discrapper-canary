n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(256754),
    s = n(372129),
    l = n(981631),
    c = n(388032),
    u = n(889756);
function d(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        d = i.useRef(0),
        [f, _] = i.useState(!1),
        [p, h] = i.useState(!1),
        m = p || f,
        g = () => {
            var e;
            null == (e = n.current) || e.activateUploadDialogue();
        },
        E = i.useCallback(
            async (e, n, r) => {
                var i;
                h(!0),
                    await (0, o.i)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: null != (i = null == t ? void 0 : t.guild_id) ? i : null,
                        analyticsLocation: {
                            section: l.jXE.EXPRESSION_PICKER,
                            page: (null == t ? void 0 : t.guild_id) != null ? l.ZY5.GUILD_CHANNEL : l.ZY5.DM_CHANNEL,
                        },
                    }),
                    (d.current += 1),
                    h(!1);
            },
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Button, {
                text: c.intl.string(c.t.iMJO37),
                variant: "secondary",
                onClick: g,
                disabled: m,
            }),
            (0, r.jsx)("div", {
                className: u.fileInput,
                children: (0, r.jsx)(
                    s.ZP,
                    {
                        ref: n,
                        onChange: E,
                        setLoading: _,
                        disabled: m,
                    },
                    d.current,
                ),
            }),
        ],
    });
}
