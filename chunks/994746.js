n.d(t, { Z: () => l });
var r = n(177267),
    i = n(750154),
    a = n(90712),
    o = n(981631),
    s = n(388032);
function l(e) {
    let t = (0, a.Z)(e),
        n = null == t ? void 0 : t.icon;
    return e.type === o.IIU.PLAYING && (null == t ? void 0 : t.type) === o.ABu.XBOX
        ? {
              text: s.intl.formatToPlainString(s.t.A17aM8, { platform: s.intl.string(s.t.Nfvo72) }),
              platformIcon: n,
          }
        : e.type === o.IIU.PLAYING && (null == t ? void 0 : t.type) === o.ABu.PLAYSTATION
          ? {
                text: s.intl.formatToPlainString(s.t.A17aM8, { platform: s.intl.string(s.t.fFl4jo) }),
                platformIcon: n,
            }
          : e.type === o.IIU.PLAYING && (null == t ? void 0 : t.type) === o.ABu.META_QUEST_OR_HORIZON
            ? {
                  text: s.intl.formatToPlainString(s.t.A17aM8, {
                      platform: (0, r.Z)(e) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e),
                  }),
                  platformIcon: n,
              }
            : e.type === o.IIU.WATCHING && (null == t ? void 0 : t.type) === o.ABu.META_QUEST_OR_HORIZON
              ? {
                    text: s.intl.formatToPlainString(s.t.ENbTKQ, {
                        platform: (0, r.Z)(e) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e),
                    }),
                    platformIcon: n,
                }
              : e.type === o.IIU.STREAMING && (null == t ? void 0 : t.type) === o.ABu.TWITCH
                ? {
                      text: s.intl.formatToPlainString(s.t["4CQq9Q"], { name: s.intl.string(s.t.q4pBG3) }),
                      platformIcon: n,
                  }
                : e.type === o.IIU.STREAMING && (null == t ? void 0 : t.type) === o.ABu.YOUTUBE
                  ? {
                        text: s.intl.formatToPlainString(s.t["4CQq9Q"], { name: s.intl.string(s.t.aS6cK4) }),
                        platformIcon: n,
                    }
                  : e.type === o.IIU.PLAYING
                    ? {
                          text: s.intl.string(s.t.BMTj28),
                          platformIcon: n,
                      }
                    : e.type === o.IIU.STREAMING
                      ? {
                            text: s.intl.string(s.t["Jpkr/q"]),
                            platformIcon: n,
                        }
                      : (0, i.dS)(e)
                        ? { text: s.intl.formatToPlainString(s.t.pW3Ip3, { name: e.name }) }
                        : e.type === o.IIU.LISTENING && null != e.details
                          ? {
                                text: s.intl.formatToPlainString(s.t["b+lA5+"], { name: e.name }),
                                platformIcon: n,
                            }
                          : e.type === o.IIU.LISTENING
                            ? {
                                  text: s.intl.string(s.t.dBISa6),
                                  platformIcon: n,
                              }
                            : e.type === o.IIU.WATCHING && null != e.details
                              ? {
                                    text: s.intl.formatToPlainString(s.t.mqdfDc, { name: e.name }),
                                    platformIcon: n,
                                }
                              : e.type === o.IIU.WATCHING
                                ? {
                                      text: s.intl.string(s.t.GpNXjC),
                                      platformIcon: n,
                                  }
                                : e.type === o.IIU.COMPETING && null != e.details
                                  ? {
                                        text: s.intl.formatToPlainString(s.t.oHF7Ch, { name: e.name }),
                                        platformIcon: n,
                                    }
                                  : e.type === o.IIU.COMPETING
                                    ? {
                                          text: s.intl.string(s.t.OzCsIA),
                                          platformIcon: n,
                                      }
                                    : e.type === o.IIU.HANG_STATUS
                                      ? {
                                            text: s.intl.string(s.t.Hi4tob),
                                            platformIcon: n,
                                        }
                                      : {
                                            text: void 0,
                                            platformIcon: n,
                                        };
}
