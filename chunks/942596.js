n.d(t, {
    Y: () => z,
    Z: () => et,
}),
    n(997841),
    n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(194983),
    d = n(780384),
    f = n(481060),
    _ = n(438139),
    p = n(410030),
    h = n(726542),
    m = n(600164),
    g = n(686546),
    E = n(925329),
    b = n(810568),
    y = n(168524),
    O = n(565138),
    v = n(833858),
    I = n(223135),
    T = n(707409),
    S = n(769654),
    A = n(424678),
    C = n(750154),
    N = n(81063),
    R = n(768581),
    P = n(630388),
    D = n(153066),
    w = n(740265),
    x = n(122810),
    L = n(833664),
    M = n(503438),
    j = n(802856),
    k = n(420660),
    U = n(39628),
    G = n(701488),
    B = n(981631),
    Z = n(388032),
    F = n(206733);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = 40;
var z = (function (e) {
    return (
        (e.ACTIVITY_FEED = "ActivityFeed"), (e.STREAM_PREVIEW = "StreamPreview"), (e.VOICE_CHANNEL = "VoiceChannel"), e
    );
})({});
let q = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500],
    },
    X = (0, _.Z)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)("div", {
                    className: F.timestamp,
                    children: this.props.message,
                });
            }
        },
    );
function Q(e) {
    let { activity: t } = e,
        n = null;
    return (
        (0, M.Z)(t) && (n = B.ABu.SPOTIFY),
        null != t.platform && [B.M7m.PS4, B.M7m.PS5].includes(t.platform) && (n = B.ABu.PLAYSTATION),
        n
    );
}
function J(e) {
    let { activity: t } = e,
        n = (0, p.ZP)(),
        r = Q({ activity: t });
    if (null == r) return null;
    let a = h.Z.get(r);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, d.ap)(n) ? a.icon.lightSVG : a.icon.darkSVG,
        className: F.platformIcon,
    });
}
class $ extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            (null == e ? void 0 : e.type) !== B.IIU.PLAYING &&
            (null == e ? void 0 : e.type) !== B.IIU.WATCHING &&
            (null == e ? void 0 : e.type) !== B.IIU.LISTENING &&
            (null == e ? void 0 : e.type) !== B.IIU.HANG_STATUS
            ? {
                  type: B.IIU.PLAYING,
                  name: Z.intl.string(Z.t.eXan7B),
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, D.l)(F, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, k.Z)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: a, renderHeaderAccessory: o } = this.props,
            l = this.activity;
        if (n || null == l) return null;
        let { name: c } = l;
        switch (l.type) {
            case B.IIU.STREAMING:
                t = Z.intl.formatToPlainString(Z.t.Dzgz4u, {
                    platform: [B.ABu.TWITCH, B.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : h.Z.get(B.ABu.TWITCH).name,
                });
                break;
            case B.IIU.LISTENING:
                t = Z.intl.formatToPlainString(Z.t["5sYPnr"], { name: c });
                break;
            case B.IIU.WATCHING:
                t = Z.intl.formatToPlainString(Z.t.Ge29Zy, { name: c });
                break;
            case B.IIU.PLAYING:
                t = (0, w.Z)(l);
                break;
            case B.IIU.COMPETING:
                t = Z.intl.formatToPlainString(Z.t.SQCo6D, { name: c });
        }
        if (null != r) {
            var d;
            t = (0, P.yE)(null != (d = null == l ? void 0 : l.flags) ? d : 0, B.xjy.EMBEDDED)
                ? l.type === B.IIU.WATCHING
                    ? Z.intl.formatToPlainString(Z.t["M/L8ot"], { guildName: r.name })
                    : Z.intl.formatToPlainString(Z.t["4chKQu"], { guildName: r.name })
                : Z.intl.formatToPlainString(Z.t.sddlGK, { server: r.name });
        }
        return (
            (null == l ? void 0 : l.type) === B.IIU.HANG_STATUS && (t = Z.intl.string(Z.t["74vS/x"])),
            (0, i.jsxs)("div", {
                className: F.headerContainer,
                children: [
                    (0, i.jsx)(f.Heading, {
                        className: s()((0, D.l)(F, "headerText", e ? "EmptyBody" : "Normal")),
                        variant: a ? "text-xs/semibold" : "eyebrow",
                        children: (0, i.jsx)(u.Z, { children: t }),
                    }),
                    null == o ? void 0 : o(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: F.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: h.Z.get(B.ABu.XBOX).icon.customPNG,
                className: s()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        var t, n, r;
        let o,
            l,
            { user: c } = this.props;
        if (e.type === B.IIU.HANG_STATUS)
            return (0, i.jsx)("div", {
                className: F.assets,
                children: (0, i.jsx)(I.Z, {
                    userId: c.id,
                    hangStatusActivity: e,
                    size: K,
                    className: s()(F.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: u } = this.props,
            { assets: d, application_id: _ } = e;
        if (null == d || (null == d.large_image && null == d.small_image)) return null;
        (0, k.Z)(e) && (o = q[u]);
        let p = (0, M.Z)(e),
            h =
                null != d.large_image
                    ? (0, i.jsx)("img", {
                          alt: null != (t = d.large_text) ? t : "",
                          src: (0, N.xF)(_, d.large_image, null != o ? o : [G.Si.LARGE, G.Si.LARGE]),
                          className: s()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? B.ABu.TWITCH : "",
                              ),
                              {
                                  [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != d.small_image,
                                  [F.assetsLargeImageSpotify]: p,
                              },
                          ),
                      })
                    : null;
        if (p)
            h = (0, i.jsx)(f.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: h,
            });
        else if ((0, C.dS)(e)) {
            let t = (0, C.rq)(e);
            if (null == t) return null;
            h = (0, i.jsx)(g.ZP, {
                mask: g.ZP.Masks.SQUIRCLE,
                width: G.Si.SMALL,
                height: G.Si.SMALL,
                children: (0, i.jsx)("img", {
                    src:
                        null !=
                        (r = R.ZP.getGuildIconURL({
                            id: t.guildId,
                            icon: d.small_image,
                            size: G.Si.SMALL,
                        }))
                            ? r
                            : void 0,
                    className: F.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (h = (0, i.jsxs)("div", {
                className: F.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: F.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(f.H, {
                                className: F.streamName,
                                children: e.name,
                            }),
                            (0, i.jsx)("div", {
                                className: F.streamGame,
                                children: Z.intl.format(Z.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(f.Anchor, {
                        className: F.twitchBackgroundImage,
                        href: e.url,
                        children: h,
                    }),
                ],
            })),
        (0, C.dS)(e) ||
            null == d.small_image ||
            (l = (0, i.jsx)(f.aML, {
                text: "" !== d.small_text ? d.small_text : null,
                position: "top",
                children: (e) => {
                    var t;
                    return (0, i.jsx)(
                        "img",
                        H(
                            {
                                alt: null != (t = d.small_text) ? t : "",
                                src: (0, N.xF)(_, d.small_image, [G.Si.SMALL, G.Si.SMALL]),
                                className: this.getTypeClass(
                                    "assetsSmallImage",
                                    null == h ? "WithoutLargeImage" : void 0,
                                ),
                            },
                            e,
                        ),
                    );
                },
            })),
        null == h)
            ? (0, i.jsx)("div", {
                  className: F.assets,
                  children: l,
              })
            : (0, i.jsxs)("div", {
                  className: F.assets,
                  children: [
                      (0, i.jsx)(f.aML, {
                          text: null != d.large_text ? d.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != h
                                  ? a.cloneElement(h, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                    })
                                  : null;
                          },
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: r, activityGuild: a } = this.props;
        return null != e.assets || (0, x.Z)(e) || e.type !== B.IIU.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == r && null != a
              ? (0, i.jsx)("div", { className: s()(F.gameIcon, F.screenshareIcon) })
              : (0, i.jsx)(E.Z, {
                    className: F.gameIcon,
                    game: r,
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: a, type: o } = e;
        if (o === B.IIU.CUSTOM_STATUS) return null;
        let l = (0, L.Z)(e),
            c = e.name,
            u = c;
        return (o === B.IIU.HANG_STATUS
            ? (u = (0, v.O8)(t.id, e))
            : l && null != n
              ? (u = (0, i.jsx)("span", {
                    className: F.activityName,
                    children: u,
                }))
              : !l &&
                ((c = a),
                (u = a),
                (0, M.Z)(e) && null != e.sync_id && null != a
                    ? (u = (0, i.jsx)(f.Anchor, {
                          className: F.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: a,
                      }))
                    : (0, C.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(f.Text, {
                  title: c,
                  variant: "text-sm/semibold",
                  className: s()((0, D.l)(F, "name", t.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            { activityGuild: a } = this.props,
            o = n,
            s = n;
        if (e.type === B.IIU.CUSTOM_STATUS) o = r;
        else if (e.type === B.IIU.HANG_STATUS && null != a)
            (o = Z.intl.formatToPlainString(Z.t.IAZiW2, { guildName: a.name })),
                (t = () => {
                    (0, S.X)(a.id);
                });
        else if (!(0, L.Z)(e)) {
            if (((o = r), (s = r), (0, M.Z)(e) && null != r)) {
                let t = (t, n) =>
                    (0, i.jsx)(
                        A.Z,
                        {
                            artists: r,
                            linkClassName: F.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                o = Z.intl.format(Z.t.uU9le8, {
                    artists: s,
                    artistsHook: t,
                });
            } else if ((0, C.dS)(e)) {
                var l;
                o = null == (l = e.assets) ? void 0 : l.small_text;
            }
        }
        return null == o || "" === o
            ? null
            : ((0, k.Z)(e) && (o = Z.intl.formatToPlainString(Z.t.gmCZRY, { game: o })), null != t)
              ? (0, i.jsx)(f.P3F, {
                    onClick: t,
                    title: null != s ? s : void 0,
                    className: F.clickableDetails,
                    children: o,
                })
              : (0, i.jsx)("div", {
                    title: null != s ? s : void 0,
                    className: (0, k.Z)(e) || (0, M.Z)(e) ? F.detailsWrap : F.details,
                    children: o,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, i.jsx)("div", {
                      className: (0, k.Z)(e) || (0, M.Z)(e) ? F.detailsWrap : F.details,
                      children: Z.intl.format(Z.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: s()((0, k.Z)(e) || (0, M.Z)(e) ? F.detailsWrap : F.details, F.guildDetails),
                      children: [
                          (0, i.jsx)(O.Z, {
                              guild: t,
                              size: O.Z.Sizes.SMOL,
                              className: F.guildIcon,
                          }),
                          (0, i.jsx)(f.Fbu, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, i.jsxs)("div", {
                              className: F.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(f.gj8, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  (0, i.jsx)(f.Text, {
                                      variant: "text-xs/normal",
                                      children: null == r ? void 0 : r.name,
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, L.Z)(e) || (0, M.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, x.Z)(e)
              ? (0, i.jsx)(X, { timestamps: n })
              : (0, i.jsx)(T.ZP, {
                    start: n.start,
                    location: T.ZP.Locations.USER_ACTIVITY,
                    className: F.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, M.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: r } = t;
        return null == n || null == r
            ? null
            : (0, i.jsx)(U.Z, {
                  start: n,
                  end: r,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        var n, r;
        let a,
            { state: o, party: s, assets: l } = e,
            c = o,
            u = o;
        if (
            !(0, L.Z)(e) &&
            ((c = null == l ? void 0 : l.large_text), (u = null == l ? void 0 : l.large_text), (0, M.Z)(e) && null != c)
        ) {
            let t = (t, n) =>
                null != e.sync_id && null != u
                    ? (0, i.jsx)(
                          f.Anchor,
                          {
                              className: F.bodyLink,
                              onClick: this.handleOpenSpotifyAlbum,
                              children: u,
                          },
                          n,
                      )
                    : u;
            c = Z.intl.format(Z.t.vOLBEy, {
                album: u,
                albumHook: t,
            });
        }
        return (null != c && "" !== c && e.type !== B.IIU.CUSTOM_STATUS) || (0, C.dS)(e)
            ? ((null == s ? void 0 : s.size) == null && [G.Zc].includes(null != (n = e.application_id) ? n : "")
                  ? (a = Z.intl.formatToPlainString(Z.t["u//9By"], {
                        count: "0",
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0,
                    }))
                  : (0, C.dS)(e) && (null == s ? void 0 : s.size) != null
                    ? (a = Z.intl.formatToPlainString(Z.t["JC/3xw"], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0],
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (a =
                          0 === s.size[1]
                              ? Z.intl.formatToPlainString(Z.t.IM4J4e, { count: s.size[0] })
                              : Z.intl.formatToPlainString(Z.t["u//9By"], {
                                    count: s.size[0],
                                    max: s.size[1],
                                })),
              (0, i.jsxs)("div", {
                  className: F.state,
                  children: [
                      (0, i.jsx)("span", {
                          title: u,
                          children: c,
                      }),
                      null != a
                          ? (0, i.jsxs)("span", {
                                children: [" ", a],
                            })
                          : null,
                  ],
              }))
            : null;
    }
    render() {
        let e,
            {
                type: t,
                renderActions: n,
                className: r,
                application: a,
                onClose: o,
                onOpenGameProfileModal: l,
            } = this.props,
            c = this.activity;
        if (null == c || c.type === B.IIU.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            d = "StreamPreview" === t,
            _ = !1;
        (0, j.Z)(c)
            ? ((e = this.renderXboxImage()), (_ = !0))
            : null == (e = this.renderImage(c)) && (_ = null != (e = this.renderGameImage(c)));
        let p = this.renderName(c),
            h = this.renderDetails(c),
            g = this.renderState(c, a),
            E = this.renderTimePlayed(c),
            b = this.renderChannelDetails(c),
            y = null != n ? n() : null,
            O = this.renderTimeBar(c),
            v = ![e, p, h, g, E, O, y].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: s()(this.getTypeClass("activity"), r),
            children: [
                this.renderHeader(v),
                (0, i.jsx)("div", {
                    className: s()(_ ? F.bodyAlignCenter : F.bodyNormal),
                    children: (0, i.jsxs)("div", {
                        className: F.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(m.Z.Child, {
                                      className: s()(
                                          (0, D.l)(
                                              F,
                                              "content",
                                              _ ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(f.P3F, {
                                              className: s()(null != l && F.openGameProfile),
                                              onClick:
                                                  null != l
                                                      ? (e) => {
                                                            l(e), null == o || o();
                                                        }
                                                      : void 0,
                                              children: [p, h, g, E],
                                          }),
                                          b,
                                          d ? null : O,
                                          u ? y : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                d ? y : null,
                (0, i.jsx)(J, { activity: c }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            V(this, "handleOpenSpotifyTrack", () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                c()(null != e, "Spotify activity was null"), null == t || t(e);
            }),
            V(this, "handleOpenSpotifyArtist", (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                c()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e);
            }),
            V(this, "handleOpenSpotifyAlbum", () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                c()(null != e, "Spotify activity was null"), null == t || t(e, n.id);
            });
    }
}
V($, "Types", z);
let ee = (e) => {
    var t, n, r;
    let a = (0, y.Z)({
        location: "UserActivity",
        applicationId:
            null != (r = null == (t = e.application) ? void 0 : t.id)
                ? r
                : null == (n = e.activity)
                  ? void 0
                  : n.application_id,
        source: b.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)($, W(H({}, e), { onOpenGameProfileModal: a }));
};
ee.Types = z;
let et = ee;
