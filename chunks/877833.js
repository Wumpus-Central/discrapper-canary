i.d(t, { default: () => C });
var l,
    n = i(627968),
    s = i(64700),
    c = i(189213),
    d = i(150934),
    a = i(375708),
    r = i(95561),
    o = i(174459),
    u = i(975571),
    _ = i(652215),
    h =
        (((l = {}).DESCRIPTION = "description"),
        (l.CATEGORIES = "categories"),
        (l.TAGS = "tags"),
        (l.AGREE_TO_RULES = "agree_to_rules"),
        l);
let k = (e) => {
    let { articleId: t, guildId: i, modalStep: l = null, pageView: n = null } = e;
    open(u.A.getArticleURL(t)),
        o.default.track(_.HAw.DISCOVERY_SETUP_CTA_CLICKED, {
            cta_name: _.Mmu,
            discovery_settings_view: n,
            help_center_article_id: t,
            modal_step: l,
            ...(0, r.H$)(i),
        });
};
var E = i(710825);
function C(e) {
    let { guildId: t, transitionState: i, onClose: l, onConfirm: r } = e,
        { rules: o, rulesAccepted: u } = (function () {
            let [e, t] = s.useState(!1),
                [i, l] = s.useState(!1),
                [n, c] = s.useState(!1);
            return {
                rules: s.useMemo(
                    () => [
                        {
                            key: "healthy",
                            title: a.intl.string(a.t.jIi9gq),
                            body: a.intl.string(a.t["4uUAXh"]),
                            onCheck: () => t(!e),
                            checked: e,
                        },
                        {
                            key: "nonNSFW",
                            title: a.intl.string(a.t["iwnCh+"]),
                            body: a.intl.string(a.t.UKFzEY),
                            onCheck: () => l(!i),
                            checked: i,
                        },
                        {
                            key: "guidelines",
                            title: a.intl.string(a.t.cZwlWn),
                            body: a.intl.string(a.t.u0Go2s),
                            onCheck: () => c(!n),
                            checked: n,
                        },
                    ],
                    [n, e, i],
                ),
                rulesAccepted: e && i && n,
            };
        })(),
        C = s.useCallback(() => {
            l(), r();
        }, [l, r]);
    return (0, n.jsx)(c.Modal, {
        title: a.intl.string(a.t["Q8OFN+"]),
        subtitle: a.intl.format(a.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                k({ articleId: _.MVz.PUBLIC_GUILD_GUILDLINES, guildId: t, modalStep: h.AGREE_TO_RULES }),
            onDiscoveryGuidelinesClick: () =>
                k({ articleId: _.MVz.SERVER_DISCOVERY_GUIDELINES, guildId: t, modalStep: h.AGREE_TO_RULES }),
        }),
        actions: [{ disabled: !u, text: a.intl.string(a.t["qjtt/p"]), onClick: C }],
        transitionState: i,
        onClose: l,
        children: (0, n.jsx)("div", {
            className: E.H,
            children: o.map((e) =>
                (0, n.jsx)(
                    "div",
                    {
                        className: E.k,
                        children: (0, n.jsx)(d.S, {
                            checked: e.checked,
                            onChange: e.onCheck,
                            label: e.title,
                            description: e.body,
                        }),
                    },
                    e.key,
                ),
            ),
        }),
    });
}
