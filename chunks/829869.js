a.d(t, { Q: () => m }), a(321073);
var s = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    n = a(151006),
    o = a(323125),
    c = a(137540),
    d = a(518579),
    _ = a(709808),
    N = a(464261),
    A = a(818348),
    u = a(396574),
    p = a(563853),
    h = a(855522),
    I = a(775684);
let k = A.sE.MAIN_NAVIGATION_MENU;
class m extends l.PureComponent {
    state = { isAppCompatible: !0 };
    componentDidMount() {
        this.setState({ isAppCompatible: u.VP });
    }
    getAppButton = () => {
        let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
            { isAppCompatible: l } = this.state,
            r = (0, o.T2)(a),
            i = h.A.Messages.NAVIGATION_LOGIN;
        return (
            null != e && ((r = A.Sb.ME), (i = h.A.Messages.NAVIGATION_OPEN)),
            l
                ? (0, s.jsx)(
                      "li",
                      {
                          className: I.listItemInactive,
                          children: (0, s.jsx)(t, {
                              eventName: k,
                              className: I.appButton,
                              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                              href: r,
                              children: i,
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
                    img: p.T.ASSET_SOCIAL_TWITTER,
                },
                {
                    route: A.w7.FACEBOOK_URL,
                    linkClicked: "facebook",
                    alt: "Discord's Facebook",
                    img: p.T.ASSET_SOCIAL_FACEBOOK,
                },
                {
                    route: A.w7.INSTAGRAM_URL,
                    linkClicked: "instagram",
                    alt: "Discord's Instagram",
                    img: p.T.ASSET_SOCIAL_INSTAGRAM,
                },
            ].map((t) =>
                (0, s.jsx)(
                    "li",
                    {
                        className: i()(I.listItemInactive, I.listItemSocialMedia),
                        children: (0, s.jsx)(e, {
                            eventName: k,
                            className: I.rightNavLink,
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
            TrackClick: r,
            avoidRouter: n,
        } = this.props;
        return (0, s.jsxs)("header", {
            className: i()(I.header, e),
            children: [
                (0, s.jsxs)("nav", {
                    className: I.headerInner,
                    children: [
                        (0, s.jsxs)("div", {
                            className: I.headerLogo,
                            children: [
                                (0, s.jsx)(r, {
                                    tag: "div",
                                    eventName: k,
                                    data: { linkClicked: "logo" },
                                    children: (0, s.jsx)(c.A, {
                                        avoidRouter: n,
                                        to: A.Tk.INDEX,
                                        from: A.sE.MAIN_NAVIGATION_MENU,
                                        children: (0, s.jsx)(d.z, {}),
                                    }),
                                }),
                                null != t
                                    ? (0, s.jsx)("a", { className: I.skipToContent, href: `#${t}`, children: a })
                                    : null,
                            ],
                        }),
                        (0, s.jsx)("ul", {
                            className: I.headerNav,
                            children: (0, s.jsx)(N.C, { avoidRouter: n, TrackClick: r, styles: I }),
                        }),
                        (0, s.jsxs)("ul", {
                            className: I.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, s.jsx)(_.B, { onChange: l })],
                        }),
                    ],
                }),
                null != t && (0, s.jsx)("div", { id: t, tabIndex: -1 }),
            ],
        });
    }
}
