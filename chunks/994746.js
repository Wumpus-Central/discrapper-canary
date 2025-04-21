n.d(t, { Z: () => s });
var r = n(750154),
    i = n(90712),
    a = n(981631),
    o = n(388032);
function s(e) {
    let t = (0, i.Z)(e),
        n = null == t ? void 0 : t.icon;
    return e.type === a.IIU.PLAYING && (null == t ? void 0 : t.type) === a.ABu.XBOX
        ? {
              text: o.intl.formatToPlainString(o.t.Sq9xJy, { game: o.intl.string(o.t['Nfvo7+']) }),
              platformIcon: n
          }
        : e.type === a.IIU.PLAYING && (null == t ? void 0 : t.type) === a.ABu.PLAYSTATION
          ? {
                text: o.intl.formatToPlainString(o.t.Sq9xJy, { game: o.intl.string(o.t.fFl4jo) }),
                platformIcon: n
            }
          : e.type === a.IIU.STREAMING && (null == t ? void 0 : t.type) === a.ABu.TWITCH
            ? {
                  text: o.intl.formatToPlainString(o.t['4CQq9f'], { name: o.intl.string(o.t.q4pBGx) }),
                  platformIcon: n
              }
            : e.type === a.IIU.STREAMING && (null == t ? void 0 : t.type) === a.ABu.YOUTUBE
              ? {
                    text: o.intl.formatToPlainString(o.t['4CQq9f'], { name: o.intl.string(o.t.aS6cKy) }),
                    platformIcon: n
                }
              : e.type === a.IIU.PLAYING
                ? {
                      text: o.intl.string(o.t.BMTj29),
                      platformIcon: n
                  }
                : e.type === a.IIU.STREAMING
                  ? {
                        text: o.intl.string(o.t['Jpkr/v']),
                        platformIcon: n
                    }
                  : (0, r.dS)(e)
                    ? { text: o.intl.formatToPlainString(o.t.pW3Ip6, { name: e.name }) }
                    : e.type === a.IIU.LISTENING && null != e.details
                      ? {
                            text: o.intl.formatToPlainString(o.t['b+lA5+'], { name: e.name }),
                            platformIcon: n
                        }
                      : e.type === a.IIU.LISTENING
                        ? {
                              text: o.intl.string(o.t.dBISa2),
                              platformIcon: n
                          }
                        : e.type === a.IIU.WATCHING && null != e.details
                          ? {
                                text: o.intl.formatToPlainString(o.t.mqdfDQ, { name: e.name }),
                                platformIcon: n
                            }
                          : e.type === a.IIU.WATCHING
                            ? {
                                  text: o.intl.string(o.t.GpNXjI),
                                  platformIcon: n
                              }
                            : e.type === a.IIU.COMPETING && null != e.details
                              ? {
                                    text: o.intl.formatToPlainString(o.t.oHF7Cg, { name: e.name }),
                                    platformIcon: n
                                }
                              : e.type === a.IIU.COMPETING
                                ? {
                                      text: o.intl.string(o.t.OzCsIC),
                                      platformIcon: n
                                  }
                                : {
                                      text: void 0,
                                      platformIcon: n
                                  };
}
