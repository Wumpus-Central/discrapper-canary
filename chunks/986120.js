"use strict";
let i;
n.d(t, { E: () => h, T: () => A });
var r = n(636537),
    a = n(228366),
    s = n(626584),
    l = n(606076),
    o = n(280450),
    d = n(340829),
    c = n(674378),
    u = n(723702),
    _ = n(19575),
    E = n(652215);
async function A() {
    null != i ||
        (u.isPlatformEmbedded && ((0, u.isMac)() || ((0, u.isWindows)() && "arm64" !== _.Ay.architecture))
            ? (await _.Ay.ensureModule("discord_cloudsync"),
              (i = new (_.Ay.getCloudSync())()).on("state", (e) =>
                  a.h.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: e }),
              ))
            : new s.A("CloudSyncUtils").warn("CloudSync is not supported on this platform"));
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!d.A.supportsCloudSync(e, t)) return Promise.resolve({ type: E.R_U.NONE });
    let a = (function () {
            if (null == i) throw Error("Initialize cloud sync module before syncing.");
            return i;
        })(),
        s = d.A.getState(e, t);
    if (null == s) throw Error(`No dispatch state for ${e}:${t}`);
    let u = s.storage ?? {},
        _ = (0, c.gW)(e, t),
        A = o.default.getToken();
    if (null == A) throw Error("Cannot use cloud sync when not authenticated.");
    let h = null != s.installPath ? (0, l.A)(s.installPath) : null;
    if (null == h) throw Error(`No install path for ${e}:${t}`);
    let I = o.default.getId(),
        f = {
            forceHash: n,
            manifestPath: E.gkb.STORAGE_MANIFEST(h, I),
            roots:
                null != u.roots
                    ? u.roots
                    : [
                          {
                              id: E.gkb.ROOT_ID,
                              paths: Object.keys(E.gkb.ROOT_PLATFORMS).map((e) => ({
                                  platform: e,
                                  path: E.gkb.ROOT_STORAGE_PATH(h, I),
                              })),
                              patterns: E.gkb.ROOT_PATTERN,
                          },
                      ],
            storage: { baseURL: `${(0, r.TP)()}${E.Rsh.APPLICATION_STORAGE(e, t)}`, token: A },
            replacements: { INSTALLDIR: E.gkb.INSTALL_DIR(h), USERID: I, BRANCHID: t },
        };
    return a.sync(_, f);
}
