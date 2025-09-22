t.d(e, { Z: () => P }), t(415506), t(388685);
var n = t(647438),
    r = t(399606),
    l = t(544891),
    a = t(780384),
    i = t(570140),
    o = t(881052),
    s = t(141795),
    d = t(476326),
    u = t(983544),
    c = t(9874),
    f = t(710845),
    g = t(430824),
    p = t(861990),
    m = t(277985),
    q = t(240864),
    h = t(863663),
    b = t(981631),
    C = t(388032);
function v(A, e, t) {
    return (
        e in A
            ? Object.defineProperty(A, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (A[e] = t),
        A
    );
}
function U(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                v(A, e, t[e]);
            });
    }
    return A;
}
function j(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
let x = new f.Z("ProductAttachmentManager");
class V {
    addAttachment(A, e) {
        let t = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= t)
            throw (
                (a.uv.announce(C.intl.formatToPlainString(C.t["0QDZ4O"], { maxAttachmentsCount: t })),
                Error("Too many attachments"))
            );
        A.target = u.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new s.nH(A, this.guildId);
        n.upload(),
            n.on("error", (t) => {
                var r;
                t === b.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let l = "number" == typeof t && t > 0 ? -t : -1,
                    i = (0, h.kg)(l),
                    o = null == (r = A.file) ? void 0 : r.name;
                null != o
                    ? a.uv.announce(
                          C.intl.formatToPlainString(C.t["+YVkfX"], {
                              filename: o,
                              reason: i,
                          }),
                      )
                    : a.uv.announce(C.intl.formatToPlainString(C.t.mBkf6e, { reason: i })),
                    e((A) => j(U({}, A), { [n.id]: l }));
            }),
            n.on("progress", (A, t) => {
                e((e) => j(U({}, e), { [n.id]: A / t }));
            }),
            (this.uploads = [...this.uploads, n]);
    }
    deleteAttachment(A) {
        let e = this.uploads.findIndex((e) => e.id === A);
        return -1 !== e && ((this.uploads = [...this.uploads]), this.uploads.splice(e, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let A of this.uploads) A.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(A) {
        let e;
        var { priceTier: t, createNewRole: n, imageName: r } = A,
            a = (function (A, e) {
                if (null == A) return {};
                var t,
                    n,
                    r = (function (A, e) {
                        if (null == A) return {};
                        var t,
                            n,
                            r = {},
                            l = Object.keys(A);
                        for (n = 0; n < l.length; n++) (t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]);
                        return r;
                    })(A, e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(A);
                    for (n = 0; n < l.length; n++)
                        (t = l[n]),
                            !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]);
                }
                return r;
            })(A, ["priceTier", "createNewRole", "imageName"]);
        if (this.uploads.some((A) => A.status === s.mw.ERROR))
            throw Error("Cannot create product with failed attachments");
        "unlinkRole" in a && (e = a.unlinkRole);
        let o = this.uploads.filter((A) => !this.existingAttachmentIds.has(A.id)),
            d = this.uploads
                .filter((A) => this.existingAttachmentIds.has(A.id))
                .map((A) => {
                    var e;
                    return {
                        filename: null == (e = A.item.file) ? void 0 : e.name,
                        id: A.id,
                    };
                }),
            u = (0, c.F)(),
            f = (await u.uploadFiles(o)).map((A, e) => (0, p.B)(A, e)),
            g = null != this.editSkuId ? l.tn.patch : l.tn.post,
            m =
                null != this.editSkuId
                    ? b.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId)
                    : b.ANM.GUILD_PRODUCTS(this.guildId),
            q = (
                await g({
                    url: m,
                    rejectWithError: !1,
                    body: j(U({}, a), {
                        price_tier: t,
                        create_new_role: n,
                        image_name: r,
                        unlink_role: e,
                        attachments: d.length > 0 ? [...d, ...f] : f,
                    }),
                })
            ).body;
        return (
            x.log("Created/updated product:", q),
            null != q &&
                (null != this.editSkuId
                    ? await i.Z.dispatch({
                          type: "GUILD_PRODUCT_UPDATE",
                          product: q,
                      })
                    : await i.Z.dispatch({
                          type: "GUILD_PRODUCT_CREATE",
                          product: q,
                      })),
            q
        );
    }
    constructor({ guildId: A, editSkuId: e, onFileSizeError: t }) {
        var n;
        v(this, "guildId", void 0),
            v(this, "editSkuId", void 0),
            v(this, "target", new m.Z()),
            v(this, "onFileSizeError", void 0),
            v(this, "existingAttachmentIds", new Set()),
            v(this, "uploads", []),
            v(this, "generateInitialProgresses", () => {
                let A = {};
                for (let e of this.uploads) A[e.id] = 1;
                return A;
            }),
            (this.editSkuId = e),
            (this.guildId = A),
            (this.onFileSizeError = t);
        let r = null == (n = q.Z.getGuildProduct(null != e ? e : "")) ? void 0 : n.attachments;
        null != r &&
            (this.uploads = r.map((e) => {
                var t;
                this.existingAttachmentIds.add(e.id);
                let n = new s.nH(
                    {
                        id: e.id,
                        platform: d.ow.WEB,
                        origin: "unknown:guild_product_attachment",
                        file: {
                            name: e.filename,
                            lastModified: 0,
                            size: null != (t = e.size) ? t : 0,
                        },
                    },
                    A,
                );
                return (n.status = s.mw.COMPLETED), n;
            }));
    }
}
function P(A, e) {
    var t;
    let { editSkuId: l, onFileSizeError: a } = e,
        i = (0, r.e7)([g.Z], () => g.Z.getGuild(A)),
        [s, d] = n.useState({
            editSkuId: l,
            onFileSizeError: a,
        }),
        u = n.useMemo(() => new V(U({ guildId: A }, s)), [A, s]),
        [c, f] = n.useState(u.generateInitialProgresses),
        [, p] = n.useState(null);
    n.useLayoutEffect(() => {
        f(u.generateInitialProgresses());
    }, [u]);
    let [m, q] = n.useState(),
        [h, C] = n.useState(),
        v = n.useCallback(
            (A) => {
                u.deleteAttachment(A) && p({});
            },
            [u],
        ),
        j = n.useCallback(
            (A) => {
                u.addAttachment(A, f), p({});
            },
            [u],
        ),
        x = n.useCallback(
            async (A) => {
                try {
                    q(A), C(void 0);
                    let e = await u.saveProductWithAttachments(A);
                    return (
                        null != e &&
                            d({
                                editSkuId: e.id,
                                onFileSizeError: a,
                            }),
                        p({}),
                        e
                    );
                } catch (A) {
                    C(A instanceof o.Hx ? A : new o.Hx(A));
                } finally {
                    q(void 0);
                }
            },
            [u, a],
        ),
        P = n.useCallback(() => {
            u.cancelUnusedUploads(), p({});
        }, [u]);
    n.useEffect(
        () => () => {
            u.cancelUnusedUploads();
        },
        [u],
    );
    let { uploads: O } = u,
        F = !O.every((A) => u.existingAttachmentIds.has(A.id)) || O.length !== u.existingAttachmentIds.size;
    return {
        addAttachment: j,
        cancelUnusedUploads: P,
        deleteAttachment: v,
        fileUploadProgresses: c,
        uploads: O,
        saveProductWithAttachments: x,
        isSaving: null != m,
        changesSaving: m,
        saveError: h,
        hasUnsavedAttachmentChanges: F,
        canAttachFiles: O.length < u.target.getMaxAttachmentsCount(),
        canAttachArchives:
            null != (t = null == i ? void 0 : i.features.has(b.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && t,
    };
}
