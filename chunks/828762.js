A.d(t, { Z: () => O }), A(415506), A(388685);
var n = A(473749),
    r = A(399606),
    a = A(544891),
    l = A(780384),
    i = A(570140),
    o = A(881052),
    s = A(141795),
    d = A(476326),
    u = A(983544),
    c = A(9874),
    g = A(710845),
    f = A(430824),
    p = A(861990),
    m = A(277985),
    v = A(240864),
    h = A(863663),
    q = A(981631),
    b = A(388032);
function C(e, t, A) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = A),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                C(e, t, A[t]);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var A = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      A.push.apply(A, n);
                  }
                  return A;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e
    );
}
let V = new g.Z("ProductAttachmentManager");
class x {
    addAttachment(e, t) {
        let A = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= A)
            throw (
                (l.uv.announce(b.intl.formatToPlainString(b.t["0QDZ4J"], { maxAttachmentsCount: A })),
                Error("Too many attachments"))
            );
        e.target = u.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new s.nH(e, this.guildId);
        n.upload(),
            n.on("error", (A) => {
                var r;
                A === q.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let a = "number" == typeof A && A > 0 ? -A : -1,
                    i = (0, h.kg)(a),
                    o = null == (r = e.file) ? void 0 : r.name;
                null != o
                    ? l.uv.announce(
                          b.intl.formatToPlainString(b.t["+YVkfX"], {
                              filename: o,
                              reason: i,
                          }),
                      )
                    : l.uv.announce(b.intl.formatToPlainString(b.t.mBkf6Z, { reason: i })),
                    t((e) => j(U({}, e), { [n.id]: a }));
            }),
            n.on("progress", (e, A) => {
                t((t) => j(U({}, t), { [n.id]: e / A }));
            }),
            (this.uploads = [...this.uploads, n]);
    }
    deleteAttachment(e) {
        let t = this.uploads.findIndex((t) => t.id === e);
        return -1 !== t && ((this.uploads = [...this.uploads]), this.uploads.splice(t, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let e of this.uploads) e.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(e) {
        let t;
        var { priceTier: A, createNewRole: n, imageName: r } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var A,
                    n,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var A,
                            n,
                            r = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) (A = a[n]), t.indexOf(A) >= 0 || (r[A] = e[A]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (A = a[n]),
                            !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]);
                }
                return r;
            })(e, ["priceTier", "createNewRole", "imageName"]);
        if (this.uploads.some((e) => e.status === s.mw.ERROR))
            throw Error("Cannot create product with failed attachments");
        "unlinkRole" in l && (t = l.unlinkRole);
        let o = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            d = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null == (t = e.item.file) ? void 0 : t.name,
                        id: e.id,
                    };
                }),
            u = (0, c.F)(),
            g = (await u.uploadFiles(o)).map((e, t) => (0, p.B)(e, t)),
            f = null != this.editSkuId ? a.tn.patch : a.tn.post,
            m =
                null != this.editSkuId
                    ? q.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId)
                    : q.ANM.GUILD_PRODUCTS(this.guildId),
            v = (
                await f({
                    url: m,
                    rejectWithError: !1,
                    body: j(U({}, l), {
                        price_tier: A,
                        create_new_role: n,
                        image_name: r,
                        unlink_role: t,
                        attachments: d.length > 0 ? [...d, ...g] : g,
                    }),
                })
            ).body;
        return (
            V.log("Created/updated product:", v),
            null != v &&
                (null != this.editSkuId
                    ? await i.Z.dispatch({
                          type: "GUILD_PRODUCT_UPDATE",
                          product: v,
                      })
                    : await i.Z.dispatch({
                          type: "GUILD_PRODUCT_CREATE",
                          product: v,
                      })),
            v
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: A }) {
        var n;
        C(this, "guildId", void 0),
            C(this, "editSkuId", void 0),
            C(this, "target", new m.Z()),
            C(this, "onFileSizeError", void 0),
            C(this, "existingAttachmentIds", new Set()),
            C(this, "uploads", []),
            C(this, "generateInitialProgresses", () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.editSkuId = t),
            (this.guildId = e),
            (this.onFileSizeError = A);
        let r = null == (n = v.Z.getGuildProduct(null != t ? t : "")) ? void 0 : n.attachments;
        null != r &&
            (this.uploads = r.map((t) => {
                var A;
                this.existingAttachmentIds.add(t.id);
                let n = new s.nH(
                    {
                        id: t.id,
                        platform: d.ow.WEB,
                        origin: "unknown:guild_product_attachment",
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null != (A = t.size) ? A : 0,
                        },
                    },
                    e,
                );
                return (n.status = s.mw.COMPLETED), n;
            }));
    }
}
function O(e, t) {
    var A;
    let { editSkuId: a, onFileSizeError: l } = t,
        i = (0, r.e7)([f.Z], () => f.Z.getGuild(e)),
        [s, d] = n.useState({
            editSkuId: a,
            onFileSizeError: l,
        }),
        u = n.useMemo(() => new x(U({ guildId: e }, s)), [e, s]),
        [c, g] = n.useState(u.generateInitialProgresses),
        [, p] = n.useState(null);
    n.useLayoutEffect(() => {
        g(u.generateInitialProgresses());
    }, [u]);
    let [m, v] = n.useState(),
        [h, b] = n.useState(),
        C = n.useCallback(
            (e) => {
                u.deleteAttachment(e) && p({});
            },
            [u],
        ),
        j = n.useCallback(
            (e) => {
                u.addAttachment(e, g), p({});
            },
            [u],
        ),
        V = n.useCallback(
            async (e) => {
                try {
                    v(e), b(void 0);
                    let t = await u.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            d({
                                editSkuId: t.id,
                                onFileSizeError: l,
                            }),
                        p({}),
                        t
                    );
                } catch (e) {
                    b(e instanceof o.Hx ? e : new o.Hx(e));
                } finally {
                    v(void 0);
                }
            },
            [u, l],
        ),
        O = n.useCallback(() => {
            u.cancelUnusedUploads(), p({});
        }, [u]);
    n.useEffect(
        () => () => {
            u.cancelUnusedUploads();
        },
        [u],
    );
    let { uploads: P } = u,
        F = !P.every((e) => u.existingAttachmentIds.has(e.id)) || P.length !== u.existingAttachmentIds.size;
    return {
        addAttachment: j,
        cancelUnusedUploads: O,
        deleteAttachment: C,
        fileUploadProgresses: c,
        uploads: P,
        saveProductWithAttachments: V,
        isSaving: null != m,
        changesSaving: m,
        saveError: h,
        hasUnsavedAttachmentChanges: F,
        canAttachFiles: P.length < u.target.getMaxAttachmentsCount(),
        canAttachArchives:
            null != (A = null == i ? void 0 : i.features.has(q.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && A,
    };
}
