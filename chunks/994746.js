n.d(t, { Z: () => s });
var r = n(750154),
    i = n(90712),
    o = n(981631),
    a = n(388032);
function s(e) {
    let t = (0, i.Z)(e),
        n = null == t ? void 0 : t.icon;
    return e.type === o.IIU.PLAYING && (null == t ? void 0 : t.type) === o.ABu.XBOX
        ? {
              text: a.intl.formatToPlainString(a.t.Sq9xJy, { game: a.intl.string(a.t['Nfvo7+']) }),
              platformIcon: n
          }
        : e.type === o.IIU.PLAYING && (null == t ? void 0 : t.type) === o.ABu.PLAYSTATION
          ? {
                text: a.intl.formatToPlainString(a.t.Sq9xJy, { game: a.intl.string(a.t.fFl4jo) }),
                platformIcon: n
            }
          : e.type === o.IIU.STREAMING && (null == t ? void 0 : t.type) === o.ABu.TWITCH
            ? {
                  text: a.intl.formatToPlainString(a.t['4CQq9f'], { name: a.intl.string(a.t.q4pBGx) }),
                  platformIcon: n
              }
            : e.type === o.IIU.STREAMING && (null == t ? void 0 : t.type) === o.ABu.YOUTUBE
              ? {
                    text: a.intl.formatToPlainString(a.t['4CQq9f'], { name: a.intl.string(a.t.aS6cKy) }),
                    platformIcon: n
                }
              : e.type === o.IIU.PLAYING
                ? {
                      text: a.intl.string(a.t.BMTj29),
                      platformIcon: n
                  }
                : e.type === o.IIU.STREAMING
                  ? {
                        text: a.intl.string(a.t['Jpkr/v']),
                        platformIcon: n
                    }
                  : (0, r.dS)(e)
                    ? { text: a.intl.formatToPlainString(a.t.pW3Ip6, { name: e.name }) }
                    : e.type === o.IIU.LISTENING && null != e.details
                      ? {
                            text: a.intl.formatToPlainString(a.t['b+lA5+'], { name: e.name }),
                            platformIcon: n
                        }
                      : e.type === o.IIU.LISTENING
                        ? {
                              text: a.intl.string(a.t.dBISa2),
                              platformIcon: n
                          }
                        : e.type === o.IIU.WATCHING && null != e.details
                          ? {
                                text: a.intl.formatToPlainString(a.t.mqdfDQ, { name: e.name }),
                                platformIcon: n
                            }
                          : e.type === o.IIU.WATCHING
                            ? {
                                  text: a.intl.string(a.t.GpNXjI),
                                  platformIcon: n
                              }
                            : e.type === o.IIU.COMPETING && null != e.details
                              ? {
                                    text: a.intl.formatToPlainString(a.t.oHF7Cg, { name: e.name }),
                                    platformIcon: n
                                }
                              : e.type === o.IIU.COMPETING
                                ? {
                                      text: a.intl.string(a.t.OzCsIC),
                                      platformIcon: n
                                  }
                                : {
                                      text: void 0,
                                      platformIcon: n
                                  };
}
