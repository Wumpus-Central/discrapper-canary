a.d(t, { Q: () => m }), a(321073);
var s = a(627968),
    l = a(64700),
    i = a(503698),
    r = a.n(i),
    n = a(151006),
    o = a(323125),
    c = a(137540),
    d = a(518579),
    _ = a(709808),
    N = a(464261),
    A = a(818348),
    u = a(396574),
    I = a(563853),
    k = a(855522),
    h = a(249139);
let p = A.sE.MAIN_NAVIGATION_MENU;
class m extends l.PureComponent {
    state = { isAppCompatible: !0 };
    componentDidMount() {
        this.setState({ isAppCompatible: u.VP });
    }
    getAppButton = () => {
        let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
            { isAppCompatible: l } = this.state,
            i = (0, o.T2)(a),
            r = k.A.Messages.NAVIGATION_LOGIN;
        return (
            null != e && ((i = A.Sb.ME), (r = k.A.Messages.NAVIGATION_OPEN)),
            l
                ? (0, s.jsx)(
                      "li",
                      {
                          className: h.listItemInactive,
                          children: (0, s.jsx)(t, {
                              eventName: p,
                              className: h.appButton,
                              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                              href: i,
                              children: r,
                          }),
                      },
                      "app-button",
                  )
                : null
        );
    };
    renderSocialMediaNav = () => {
        let { TrackClick: e } = this.props,
            t = [
                {
                    route: (0, n.S)(A.Pq.TWITTER),
                    linkClicked: "twitter",
                    alt: "Discord's Twitter",
                    img: I.T.ASSET_SOCIAL_TWITTER,
                },
                {
                    route: A.w7.FACEBOOK_URL,
                    linkClicked: "facebook",
                    alt: "Discord's Facebook",
                    img: I.T.ASSET_SOCIAL_FACEBOOK,
                },
                {
                    route: A.w7.INSTAGRAM_URL,
                    linkClicked: "instagram",
                    alt: "Discord's Instagram",
                    img: I.T.ASSET_SOCIAL_INSTAGRAM,
                },
            ].map((t) =>
                (0, s.jsx)(
                    "li",
                    {
                        className: r()(h.listItemInactive, h.listItemSocialMedia),
                        children: (0, s.jsx)(e, {
                            eventName: p,
                            className: h.rightNavLink,
                            data: { linkClicked: t.linkClicked },
                            href: t.route,
                            rel: "me",
                            target: "_blank",
                            children: (0, s.jsx)("img", { src: t.img, alt: t.alt }),
                        }),
                    },
                    t.route,
                ),
            ),
            a = this.getAppButton();
        return null != a && t.push(a), t;
    };
    render() {
        let {
            className: e,
            mainContentId: t,
            skipToContentLabel: a,
            onChangeLocale: l,
            TrackClick: i,
            avoidRouter: n,
        } = this.props;
        return (0, s.jsxs)("header", {
            className: r()(h.header, e),
            children: [
                (0, s.jsxs)("nav", {
                    className: h.headerInner,
                    children: [
                        (0, s.jsxs)("div", {
                            className: h.headerLogo,
                            children: [
                                (0, s.jsx)(i, {
                                    tag: "div",
                                    eventName: p,
                                    data: { linkClicked: "logo" },
                                    children: (0, s.jsx)(c.A, {
                                        avoidRouter: n,
                                        to: A.Tk.INDEX,
                                        from: A.sE.MAIN_NAVIGATION_MENU,
                                        children: (0, s.jsx)(d.z, {}),
                                    }),
                                }),
                                null != t
                                    ? (0, s.jsx)("a", { className: h.skipToContent, href: `#${t}`, children: a })
                                    : null,
                            ],
                        }),
                        (0, s.jsx)("ul", {
                            className: h.headerNav,
                            children: (0, s.jsx)(N.C, { avoidRouter: n, TrackClick: i, styles: h }),
                        }),
                        (0, s.jsxs)("ul", {
                            className: h.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, s.jsx)(_.B, { onChange: l })],
                        }),
                    ],
                }),
                null != t && (0, s.jsx)("div", { id: t, tabIndex: -1 }),
            ],
        });
    }
}
