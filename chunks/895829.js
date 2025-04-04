var t = (e.exports = {
    v: [
        {
            name: 'version',
            reg: /^(\d*)$/
        }
    ],
    o: [
        {
            name: 'origin',
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
            format: '%s %s %d %s IP%d %s'
        }
    ],
    s: [{ name: 'name' }],
    i: [{ name: 'description' }],
    u: [{ name: 'uri' }],
    e: [{ name: 'email' }],
    p: [{ name: 'phone' }],
    z: [{ name: 'timezones' }],
    r: [{ name: 'repeats' }],
    t: [
        {
            name: 'timing',
            reg: /^(\d*) (\d*)/,
            names: ['start', 'stop'],
            format: '%d %d'
        }
    ],
    c: [
        {
            name: 'connection',
            reg: /^IN IP(\d) (\S*)/,
            names: ['version', 'ip'],
            format: 'IN IP%d %s'
        }
    ],
    b: [
        {
            push: 'bandwidth',
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: ['type', 'limit'],
            format: '%s:%s'
        }
    ],
    m: [
        {
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: ['type', 'port', 'protocol', 'payloads'],
            format: '%s %d %s %s'
        }
    ],
    a: [
        {
            push: 'rtp',
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: ['payload', 'codec', 'rate', 'encoding'],
            format: function (e) {
                return e.encoding ? 'rtpmap:%d %s/%s/%s' : e.rate ? 'rtpmap:%d %s/%s' : 'rtpmap:%d %s';
            }
        },
        {
            push: 'fmtp',
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: ['payload', 'config'],
            format: 'fmtp:%d %s'
        },
        {
            name: 'control',
            reg: /^control:(.*)/,
            format: 'control:%s'
        },
        {
            name: 'rtcp',
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: ['port', 'netType', 'ipVer', 'address'],
            format: function (e) {
                return null != e.address ? 'rtcp:%d %s IP%d %s' : 'rtcp:%d';
            }
        },
        {
            push: 'rtcpFbTrrInt',
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: ['payload', 'value'],
            format: 'rtcp-fb:%s trr-int %d'
        },
        {
            push: 'rtcpFb',
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: ['payload', 'type', 'subtype'],
            format: function (e) {
                return null != e.subtype ? 'rtcp-fb:%s %s %s' : 'rtcp-fb:%s %s';
            }
        },
        {
            push: 'ext',
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: ['value', 'direction', 'encrypt-uri', 'uri', 'config'],
            format: function (e) {
                return 'extmap:%d' + (e.direction ? '/%s' : '%v') + (e['encrypt-uri'] ? ' %s' : '%v') + ' %s' + (e.config ? ' %s' : '');
            }
        },
        {
            name: 'extmapAllowMixed',
            reg: /^(extmap-allow-mixed)/
        },
        {
            push: 'crypto',
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: ['id', 'suite', 'config', 'sessionConfig'],
            format: function (e) {
                return null != e.sessionConfig ? 'crypto:%d %s %s %s' : 'crypto:%d %s %s';
            }
        },
        {
            name: 'setup',
            reg: /^setup:(\w*)/,
            format: 'setup:%s'
        },
        {
            name: 'connectionType',
            reg: /^connection:(new|existing)/,
            format: 'connection:%s'
        },
        {
            name: 'mid',
            reg: /^mid:([^\s]*)/,
            format: 'mid:%s'
        },
        {
            name: 'msid',
            reg: /^msid:(.*)/,
            format: 'msid:%s'
        },
        {
            name: 'ptime',
            reg: /^ptime:(\d*(?:\.\d*)*)/,
            format: 'ptime:%d'
        },
        {
            name: 'maxptime',
            reg: /^maxptime:(\d*(?:\.\d*)*)/,
            format: 'maxptime:%d'
        },
        {
            name: 'direction',
            reg: /^(sendrecv|recvonly|sendonly|inactive)/
        },
        {
            name: 'icelite',
            reg: /^(ice-lite)/
        },
        {
            name: 'iceUfrag',
            reg: /^ice-ufrag:(\S*)/,
            format: 'ice-ufrag:%s'
        },
        {
            name: 'icePwd',
            reg: /^ice-pwd:(\S*)/,
            format: 'ice-pwd:%s'
        },
        {
            name: 'fingerprint',
            reg: /^fingerprint:(\S*) (\S*)/,
            names: ['type', 'hash'],
            format: 'fingerprint:%s %s'
        },
        {
            push: 'candidates',
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
            format: function (e) {
                var t = 'candidate:%s %d %s %d %s %d typ %s';
                return (t += (null != e.raddr ? ' raddr %s rport %d' : '%v%v') + (null != e.tcptype ? ' tcptype %s' : '%v')), null != e.generation && (t += ' generation %d'), (t += (null != e['network-id'] ? ' network-id %d' : '%v') + (null != e['network-cost'] ? ' network-cost %d' : '%v'));
            }
        },
        {
            name: 'endOfCandidates',
            reg: /^(end-of-candidates)/
        },
        {
            name: 'remoteCandidates',
            reg: /^remote-candidates:(.*)/,
            format: 'remote-candidates:%s'
        },
        {
            name: 'iceOptions',
            reg: /^ice-options:(\S*)/,
            format: 'ice-options:%s'
        },
        {
            push: 'ssrcs',
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: ['id', 'attribute', 'value'],
            format: function (e) {
                var t = 'ssrc:%d';
                return null != e.attribute && ((t += ' %s'), null != e.value && (t += ':%s')), t;
            }
        },
        {
            push: 'ssrcGroups',
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: ['semantics', 'ssrcs'],
            format: 'ssrc-group:%s %s'
        },
        {
            name: 'msidSemantic',
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: ['semantic', 'token'],
            format: 'msid-semantic: %s %s'
        },
        {
            push: 'groups',
            reg: /^group:(\w*) (.*)/,
            names: ['type', 'mids'],
            format: 'group:%s %s'
        },
        {
            name: 'rtcpMux',
            reg: /^(rtcp-mux)/
        },
        {
            name: 'rtcpRsize',
            reg: /^(rtcp-rsize)/
        },
        {
            name: 'sctpmap',
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: ['sctpmapNumber', 'app', 'maxMessageSize'],
            format: function (e) {
                return null != e.maxMessageSize ? 'sctpmap:%s %s %s' : 'sctpmap:%s %s';
            }
        },
        {
            name: 'xGoogleFlag',
            reg: /^x-google-flag:([^\s]*)/,
            format: 'x-google-flag:%s'
        },
        {
            push: 'rids',
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: ['id', 'direction', 'params'],
            format: function (e) {
                return e.params ? 'rid:%s %s %s' : 'rid:%s %s';
            }
        },
        {
            push: 'imageattrs',
            reg: RegExp('^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'),
            names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
            format: function (e) {
                return 'imageattr:%s %s %s' + (e.dir2 ? ' %s %s' : '');
            }
        },
        {
            name: 'simulcast',
            reg: RegExp('^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$'),
            names: ['dir1', 'list1', 'dir2', 'list2'],
            format: function (e) {
                return 'simulcast:%s %s' + (e.dir2 ? ' %s %s' : '');
            }
        },
        {
            name: 'simulcast_03',
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: ['value'],
            format: 'simulcast: %s'
        },
        {
            name: 'framerate',
            reg: /^framerate:(\d+(?:$|\.\d+))/,
            format: 'framerate:%s'
        },
        {
            name: 'sourceFilter',
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
            format: 'source-filter: %s %s %s %s %s'
        },
        {
            name: 'bundleOnly',
            reg: /^(bundle-only)/
        },
        {
            name: 'label',
            reg: /^label:(.+)/,
            format: 'label:%s'
        },
        {
            name: 'sctpPort',
            reg: /^sctp-port:(\d+)$/,
            format: 'sctp-port:%s'
        },
        {
            name: 'maxMessageSize',
            reg: /^max-message-size:(\d+)$/,
            format: 'max-message-size:%s'
        },
        {
            push: 'tsRefClocks',
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: ['clksrc', 'clksrcExt'],
            format: function (e) {
                return 'ts-refclk:%s' + (null != e.clksrcExt ? '=%s' : '');
            }
        },
        {
            name: 'mediaClk',
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: ['id', 'mediaClockName', 'mediaClockValue', 'rateNumerator', 'rateDenominator'],
            format: function (e) {
                var t = 'mediaclk:';
                return t + ((null != e.id ? 'id=%s %s' : '%v%s') + (null != e.mediaClockValue ? '=%s' : '') + (null != e.rateNumerator ? ' rate=%s' : '') + (null != e.rateDenominator ? '/%s' : ''));
            }
        },
        {
            name: 'keywords',
            reg: /^keywds:(.+)$/,
            format: 'keywds:%s'
        },
        {
            name: 'content',
            reg: /^content:(.+)/,
            format: 'content:%s'
        },
        {
            name: 'bfcpFloorCtrl',
            reg: /^floorctrl:(c-only|s-only|c-s)/,
            format: 'floorctrl:%s'
        },
        {
            name: 'bfcpConfId',
            reg: /^confid:(\d+)/,
            format: 'confid:%s'
        },
        {
            name: 'bfcpUserId',
            reg: /^userid:(\d+)/,
            format: 'userid:%s'
        },
        {
            name: 'bfcpFloorId',
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: ['id', 'mStream'],
            format: 'floorid:%s mstrm:%s'
        },
        {
            push: 'invalid',
            names: ['value']
        }
    ]
});
Object.keys(t).forEach(function (e) {
    t[e].forEach(function (e) {
        e.reg || (e.reg = /(.*)/), e.format || (e.format = '%s');
    });
});
