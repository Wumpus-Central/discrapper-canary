n.d(t, { Z: () => a });
var r = n(90712),
    i = n(981631),
    o = n(388032);
function a(e) {
    let t = (0, r.Z)(e),
        n = null == t ? void 0 : t.icon;
    return e.type === i.IIU.PLAYING && (null == t ? void 0 : t.type) === i.ABu.XBOX
        ? {
              text: o.NW.formatToPlainString(o.t.Sq9xJy, { game: o.NW.string(o.t['Nfvo7+']) }),
              platformIcon: n
          }
        : e.type === i.IIU.PLAYING && (null == t ? void 0 : t.type) === i.ABu.PLAYSTATION
          ? {
                text: o.NW.formatToPlainString(o.t.Sq9xJy, { game: o.NW.string(o.t.fFl4jo) }),
                platformIcon: n
            }
          : e.type === i.IIU.STREAMING && (null == t ? void 0 : t.type) === i.ABu.TWITCH
            ? {
                  text: o.NW.formatToPlainString(o.t['4CQq9f'], { name: o.NW.string(o.t.q4pBGx) }),
                  platformIcon: n
              }
            : e.type === i.IIU.STREAMING && (null == t ? void 0 : t.type) === i.ABu.YOUTUBE
              ? {
                    text: o.NW.formatToPlainString(o.t['4CQq9f'], { name: o.NW.string(o.t.aS6cKy) }),
                    platformIcon: n
                }
              : e.type === i.IIU.PLAYING
                ? {
                      text: o.NW.string(o.t.BMTj29),
                      platformIcon: n
                  }
                : e.type === i.IIU.STREAMING
                  ? {
                        text: o.NW.string(o.t['Jpkr/v']),
                        platformIcon: n
                    }
                  : e.type === i.IIU.LISTENING && null != e.details
                    ? {
                          text: o.NW.formatToPlainString(o.t['b+lA5+'], { name: e.name }),
                          platformIcon: n
                      }
                    : e.type === i.IIU.LISTENING
                      ? {
                            text: o.NW.string(o.t.dBISa2),
                            platformIcon: n
                        }
                      : e.type === i.IIU.WATCHING && null != e.details
                        ? {
                              text: o.NW.formatToPlainString(o.t.mqdfDQ, { name: e.name }),
                              platformIcon: n
                          }
                        : e.type === i.IIU.WATCHING
                          ? {
                                text: o.NW.string(o.t.GpNXjI),
                                platformIcon: n
                            }
                          : e.type === i.IIU.COMPETING && null != e.details
                            ? {
                                  text: o.NW.formatToPlainString(o.t.oHF7Cg, { name: e.name }),
                                  platformIcon: n
                              }
                            : e.type === i.IIU.COMPETING
                              ? {
                                    text: o.NW.string(o.t.OzCsIC),
                                    platformIcon: n
                                }
                              : {
                                    text: void 0,
                                    platformIcon: n
                                };
}
