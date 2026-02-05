"use strict";
let r;
n.d(t, { E: () => g, T: () => m });
var i = n(562465),
    a = n(73153),
    s = n(626584),
    o = n(606076),
    l = n(961350),
    u = n(194871),
    c = n(674378),
    d = n(723702),
    _ = n(837921),
    f = n(652215);
function p() {
    if (null == r) throw Error("Initialize cloud sync module before syncing.");
    return r;
}
function h() {
    return d.isPlatformEmbedded && ((0, d.isMac)() || ((0, d.isWindows)() && "arm64" !== _.Ay.architecture));
}
async function m() {
    null != r ||
        (h()
            ? (await _.Ay.ensureModule("discord_cloudsync"),
              (r = new (_.Ay.getCloudSync())()).on("state", (e) =>
                  a.h.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: e }),
              ))
            : new s.A("CloudSyncUtils").warn("CloudSync is not supported on this platform"));
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!u.A.supportsCloudSync(e, t)) return Promise.resolve({ type: f.R_U.NONE });
    let r = p(),
        a = u.A.getState(e, t);
    if (null == a) throw Error(`No dispatch state for ${e}:${t}`);
    let s = a.storage ?? {},
        d = (0, c.gW)(e, t),
        _ = l.default.getToken();
    if (null == _) throw Error("Cannot use cloud sync when not authenticated.");
    let h = null != a.installPath ? (0, o.A)(a.installPath) : null;
    if (null == h) throw Error(`No install path for ${e}:${t}`);
    let m = l.default.getId(),
        g = {
            forceHash: n,
            manifestPath: f.gkb.STORAGE_MANIFEST(h, m),
            roots:
                null != s.roots
                    ? s.roots
                    : [
                          {
                              id: f.gkb.ROOT_ID,
                              paths: Object.keys(f.gkb.ROOT_PLATFORMS).map((e) => ({
                                  platform: e,
                                  path: f.gkb.ROOT_STORAGE_PATH(h, m),
                              })),
                              patterns: f.gkb.ROOT_PATTERN,
                          },
                      ],
            storage: { baseURL: `${(0, i.TP)()}${f.Rsh.APPLICATION_STORAGE(e, t)}`, token: _ },
            replacements: { INSTALLDIR: f.gkb.INSTALL_DIR(h), USERID: m, BRANCHID: t },
        };
    return r.sync(d, g);
}
