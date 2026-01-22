a.d(t, { Q: () => O }), a(896048), a(321073);
var s = a(627968),
    l = a(64700),
    r = a(503698),
    n = a.n(r),
    i = a(595768),
    o = a(323125),
    c = a(137540),
    d = a(518579),
    u = a(709808),
    N = a(464261),
    A = a(818348),
    p = a(396574),
    h = a(563853),
    b = a(855522),
    f = a(33221);
function k(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = a),
        e
    );
}
let I = A.sE.MAIN_NAVIGATION_MENU;
class O extends l.PureComponent {
    componentDidMount() {
        this.setState({ isAppCompatible: p.VP });
    }
    render() {
        let {
            className: e,
            mainContentId: t,
            skipToContentLabel: a,
            onChangeLocale: l,
            TrackClick: r,
            avoidRouter: i,
        } = this.props;
        return (0, s.jsxs)("header", {
            className: n()(f.header, e),
            children: [
                (0, s.jsxs)("nav", {
                    className: f.headerInner,
                    children: [
                        (0, s.jsxs)("div", {
                            className: f.headerLogo,
                            children: [
                                (0, s.jsx)(r, {
                                    tag: "div",
                                    eventName: I,
                                    data: { linkClicked: "logo" },
                                    children: (0, s.jsx)(c.A, {
                                        avoidRouter: i,
                                        to: A.Tk.INDEX,
                                        from: A.sE.MAIN_NAVIGATION_MENU,
                                        children: (0, s.jsx)(d.z, {}),
                                    }),
                                }),
                                null != t
                                    ? (0, s.jsx)("a", {
                                          className: f.skipToContent,
                                          href: "#".concat(t),
                                          children: a,
                                      })
                                    : null,
                            ],
                        }),
                        (0, s.jsx)("ul", {
                            className: f.headerNav,
                            children: (0, s.jsx)(N.C, {
                                avoidRouter: i,
                                TrackClick: r,
                                styles: f,
                            }),
                        }),
                        (0, s.jsxs)("ul", {
                            className: f.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, s.jsx)(u.B, { onChange: l })],
                        }),
                    ],
                }),
                null != t &&
                    (0, s.jsx)("div", {
                        id: t,
                        tabIndex: -1,
                    }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            k(this, "state", { isAppCompatible: !0 }),
            k(this, "getAppButton", () => {
                let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
                    { isAppCompatible: l } = this.state,
                    r = (0, o.T2)(a),
                    n = b.A.Messages.NAVIGATION_LOGIN;
                return (
                    null != e && ((r = A.Sb.ME), (n = b.A.Messages.NAVIGATION_OPEN)),
                    l
                        ? (0, s.jsx)(
                              "li",
                              {
                                  className: f.listItemInactive,
                                  children: (0, s.jsx)(t, {
                                      eventName: I,
                                      className: f.appButton,
                                      data: {
                                          linkClicked: e ? "open" : "login",
                                          googleAnalytics: !0,
                                      },
                                      href: r,
                                      children: n,
                                  }),
                              },
                              "app-button",
                          )
                        : null
                );
            }),
            k(this, "renderSocialMediaNav", () => {
                let { TrackClick: e } = this.props,
                    t = [
                        {
                            route: (0, i.S)(A.Pq.TWITTER),
                            linkClicked: "twitter",
                            alt: "Discord's Twitter",
                            img: h.T.ASSET_SOCIAL_TWITTER,
                        },
                        {
                            route: A.w7.FACEBOOK_URL,
                            linkClicked: "facebook",
                            alt: "Discord's Facebook",
                            img: h.T.ASSET_SOCIAL_FACEBOOK,
                        },
                        {
                            route: A.w7.INSTAGRAM_URL,
                            linkClicked: "instagram",
                            alt: "Discord's Instagram",
                            img: h.T.ASSET_SOCIAL_INSTAGRAM,
                        },
                    ].map((t) =>
                        (0, s.jsx)(
                            "li",
                            {
                                className: n()(f.listItemInactive, f.listItemSocialMedia),
                                children: (0, s.jsx)(e, {
                                    eventName: I,
                                    className: f.rightNavLink,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: "me",
                                    target: "_blank",
                                    children: (0, s.jsx)("img", {
                                        src: t.img,
                                        alt: t.alt,
                                    }),
                                }),
                            },
                            t.route,
                        ),
                    ),
                    a = this.getAppButton();
                return null != a && t.push(a), t;
            });
    }
}
