r.d(t, { Z: () => y }), r(415506), r(388685);
var n = r(73800),
    i = r(399606),
    a = r(544891),
    l = r(780384),
    o = r(570140),
    A = r(881052),
    s = r(141795),
    c = r(476326),
    d = r(983544),
    u = r(9874),
    f = r(710845),
    g = r(430824),
    h = r(861990),
    p = r(277985),
    m = r(240864),
    b = r(863663),
    v = r(981631),
    C = r(388032);
function x(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                x(e, t, r[t]);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let O = new f.Z('ProductAttachmentManager');
class P {
    addAttachment(e, t) {
        let r = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= r) throw (l.uv.announce(C.intl.formatToPlainString(C.t['0QDZ4O'], { maxAttachmentsCount: r })), Error('Too many attachments'));
        e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new s.n(e, this.guildId);
        n.upload(),
            n.on('error', (r) => {
                var i;
                r === v.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let a = 'number' == typeof r && r > 0 ? -r : -1,
                    o = (0, b.kg)(a),
                    A = null == (i = e.file) ? void 0 : i.name;
                null != A
                    ? l.uv.announce(
                          C.intl.formatToPlainString(C.t['+YVkfX'], {
                              filename: A,
                              reason: o
                          })
                      )
                    : l.uv.announce(C.intl.formatToPlainString(C.t.mBkf6e, { reason: o })),
                    t((e) => j(q({}, e), { [n.id]: a }));
            }),
            n.on('progress', (e, r) => {
                t((t) => j(q({}, t), { [n.id]: e / r }));
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
        var { priceTier: r, createNewRole: n, imageName: i } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            i = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                }
                return i;
            })(e, ['priceTier', 'createNewRole', 'imageName']);
        if (this.uploads.some((e) => e.status === s.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in l && (t = l.unlinkRole);
        let A = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            c = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null == (t = e.item.file) ? void 0 : t.name,
                        id: e.id
                    };
                }),
            d = (0, u.F)(),
            f = (await d.uploadFilesSimple(A)).map((e, t) => (0, h.B)(e, t)),
            g = null != this.editSkuId ? a.tn.patch : a.tn.post,
            p = null != this.editSkuId ? v.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : v.ANM.GUILD_PRODUCTS(this.guildId),
            m = (
                await g({
                    url: p,
                    rejectWithError: !1,
                    body: j(q({}, l), {
                        price_tier: r,
                        create_new_role: n,
                        image_name: i,
                        unlink_role: t,
                        attachments: c.length > 0 ? [...c, ...f] : f
                    })
                })
            ).body;
        return (
            O.log('Created/updated product:', m),
            null != m &&
                (null != this.editSkuId
                    ? await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: m
                      })
                    : await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: m
                      })),
            m
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: r }) {
        var n;
        x(this, 'guildId', void 0),
            x(this, 'editSkuId', void 0),
            x(this, 'target', new p.Z()),
            x(this, 'onFileSizeError', void 0),
            x(this, 'existingAttachmentIds', new Set()),
            x(this, 'uploads', []),
            x(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.editSkuId = t),
            (this.guildId = e),
            (this.onFileSizeError = r);
        let i = null == (n = m.Z.getGuildProduct(null != t ? t : '')) ? void 0 : n.attachments;
        null != i &&
            (this.uploads = i.map((t) => {
                var r;
                this.existingAttachmentIds.add(t.id);
                let n = new s.n(
                    {
                        id: t.id,
                        platform: c.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null != (r = t.size) ? r : 0
                        }
                    },
                    e
                );
                return (n.status = s.m.COMPLETED), n;
            }));
    }
}
function y(e, t) {
    var r;
    let { editSkuId: a, onFileSizeError: l } = t,
        o = (0, i.e7)([g.Z], () => g.Z.getGuild(e)),
        [s, c] = n.useState({
            editSkuId: a,
            onFileSizeError: l
        }),
        d = n.useMemo(() => new P(q({ guildId: e }, s)), [e, s]),
        [u, f] = n.useState(d.generateInitialProgresses),
        [, h] = n.useState(null);
    n.useLayoutEffect(() => {
        f(d.generateInitialProgresses());
    }, [d]);
    let [p, m] = n.useState(),
        [b, C] = n.useState(),
        x = n.useCallback(
            (e) => {
                d.deleteAttachment(e) && h({});
            },
            [d]
        ),
        j = n.useCallback(
            (e) => {
                d.addAttachment(e, f), h({});
            },
            [d]
        ),
        O = n.useCallback(
            async (e) => {
                try {
                    m(e), C(void 0);
                    let t = await d.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            c({
                                editSkuId: t.id,
                                onFileSizeError: l
                            }),
                        h({}),
                        t
                    );
                } catch (e) {
                    C(
                        e instanceof A.Hx
                            ? e
                            : new A.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    m(void 0);
                }
            },
            [d, l]
        ),
        y = n.useCallback(() => {
            d.cancelUnusedUploads(), h({});
        }, [d]);
    n.useEffect(
        () => () => {
            d.cancelUnusedUploads();
        },
        [d]
    );
    let { uploads: U } = d,
        V = !U.every((e) => d.existingAttachmentIds.has(e.id)) || U.length !== d.existingAttachmentIds.size;
    return {
        addAttachment: j,
        cancelUnusedUploads: y,
        deleteAttachment: x,
        fileUploadProgresses: u,
        uploads: U,
        saveProductWithAttachments: O,
        isSaving: null != p,
        changesSaving: p,
        saveError: b,
        hasUnsavedAttachmentChanges: V,
        canAttachFiles: U.length < d.target.getMaxAttachmentsCount(),
        canAttachArchives: null != (r = null == o ? void 0 : o.hasFeature(v.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && r
    };
}
