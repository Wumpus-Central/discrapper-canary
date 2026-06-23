i.d(t, { default: () => C });
var n,
    l = i(627968),
    s = i(64700),
    c = i(189213),
    d = i(150934),
    a = i(375708),
    o = i(95561),
    r = i(174459),
    u = i(975571),
    _ = i(652215),
    h =
        (((n = {}).DESCRIPTION = "description"),
        (n.CATEGORIES = "categories"),
        (n.TAGS = "tags"),
        (n.AGREE_TO_RULES = "agree_to_rules"),
        n);
function k(e) {
    let { articleId: t, guildId: i, modalStep: n = null, pageView: l = null } = e;
    open(u.A.getArticleURL(t)),
        r.default.track(_.HAw.DISCOVERY_SETUP_CTA_CLICKED, {
            cta_name: _.Mmu,
            discovery_settings_view: l,
            help_center_article_id: t,
            modal_step: n,
            ...(0, o.H$)(i),
        });
}
var E = i(710825);
function C(e) {
    let { guildId: t, transitionState: i, onClose: n, onConfirm: o } = e,
        { rules: r, rulesAccepted: u } = (function () {
            let [e, t] = s.useState(!1),
                [i, n] = s.useState(!1),
                [l, c] = s.useState(!1);
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
                            onCheck: () => n(!i),
                            checked: i,
                        },
                        {
                            key: "guidelines",
                            title: a.intl.string(a.t.cZwlWn),
                            body: a.intl.string(a.t.u0Go2s),
                            onCheck: () => c(!l),
                            checked: l,
                        },
                    ],
                    [l, e, i],
                ),
                rulesAccepted: e && i && l,
            };
        })(),
        C = s.useCallback(() => {
            n(), o();
        }, [n, o]);
    return (0, l.jsx)(c.Modal, {
        title: a.intl.string(a.t["Q8OFN+"]),
        subtitle: a.intl.format(a.t.JLUVfo, {
            onCommunityGuidelinesClick: () =>
                k({ articleId: _.MVz.PUBLIC_GUILD_GUILDLINES, guildId: t, modalStep: h.AGREE_TO_RULES }),
            onDiscoveryGuidelinesClick: () =>
                k({ articleId: _.MVz.SERVER_DISCOVERY_GUIDELINES, guildId: t, modalStep: h.AGREE_TO_RULES }),
        }),
        actions: [{ disabled: !u, text: a.intl.string(a.t["qjtt/p"]), onClick: C }],
        transitionState: i,
        onClose: n,
        children: (0, l.jsx)("div", {
            className: E.H,
            children: r.map((e) =>
                (0, l.jsx)(
                    "div",
                    {
                        className: E.k,
                        children: (0, l.jsx)(d.S, {
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
