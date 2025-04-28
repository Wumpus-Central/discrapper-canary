n.d(t, { Z: () => o });
var r = n(200651),
    i = n(998502),
    l = n(15594);
let o = i.ZP.getEnableHardwareAcceleration()
    ? function () {
          return (0, r.jsx)('div', {
              children: (0, r.jsxs)('div', {
                  className: l.gradientBackground,
                  children: [(0, r.jsx)('div', { className: l.leftDarkEllipse }), (0, r.jsx)('div', { className: l.leftLightEllipse }), (0, r.jsx)('div', { className: l.rightDarkEllipse }), (0, r.jsx)('div', { className: l.rightLightEllipse }), (0, r.jsx)('div', { className: l.centerEllipse })]
              })
          });
      }
    : function () {
          return (0, r.jsxs)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '1000',
              height: '1000',
              fill: 'none',
              viewBox: '0 0 1000 1000',
              preserveAspectRatio: 'none',
              style: {
                  position: 'absolute',
                  top: 0,
                  width: '100%'
              },
              children: [
                  (0, r.jsxs)('g', {
                      'clip-path': 'url(#a)',
                      children: [
                          (0, r.jsx)('path', {
                              fill: '#000',
                              d: 'M1000 0H0v1000h1000V0Z'
                          }),
                          (0, r.jsxs)('g', {
                              fill: '#1D0066',
                              filter: 'url(#b)',
                              children: [(0, r.jsx)('path', { d: 'M52.5 683C374.206 683 635 413.028 635 80S374.206-523 52.5-523-530-253.028-530 80s260.794 603 582.5 603Z' }), (0, r.jsx)('path', { d: 'M938.5 534c300.72 0 544.5-210.202 544.5-469.5S1239.22-405 938.5-405C637.781-405 394-194.798 394 64.5S637.781 534 938.5 534Z' })]
                          }),
                          (0, r.jsxs)('g', {
                              fill: '#5865F2',
                              filter: 'url(#c)',
                              opacity: '.8',
                              children: [(0, r.jsx)('path', { d: 'M93 110.8c122.607 0 222-71.366 222-159.4S215.607-208 93-208s-222 71.366-222 159.4 99.393 159.4 222 159.4ZM1004 110.8c122.61 0 222-71.366 222-159.4S1126.61-208 1004-208c-122.607 0-222 71.366-222 159.4s99.393 159.4 222 159.4Z' }), (0, r.jsx)('path', { d: 'M500 82c193.3 0 350-67.157 350-150S693.3-218 500-218 150-150.843 150-68 306.7 82 500 82Z' })]
                          })
                      ]
                  }),
                  (0, r.jsxs)('defs', {
                      children: [
                          (0, r.jsxs)('filter', {
                              id: 'b',
                              width: '2733',
                              height: '1926',
                              x: '-890',
                              y: '-883',
                              'color-interpolation-filters': 'sRGB',
                              filterUnits: 'userSpaceOnUse',
                              children: [
                                  (0, r.jsx)('feFlood', {
                                      'flood-opacity': '0',
                                      result: 'BackgroundImageFix'
                                  }),
                                  (0, r.jsx)('feBlend', {
                                      in: 'SourceGraphic',
                                      in2: 'BackgroundImageFix',
                                      result: 'shape'
                                  }),
                                  (0, r.jsx)('feGaussianBlur', {
                                      result: 'effect1_foregroundBlur_1212_34971',
                                      stdDeviation: '180'
                                  })
                              ]
                          }),
                          (0, r.jsxs)('filter', {
                              id: 'c',
                              width: '1955',
                              height: '928.8',
                              x: '-429',
                              y: '-518',
                              'color-interpolation-filters': 'sRGB',
                              filterUnits: 'userSpaceOnUse',
                              children: [
                                  (0, r.jsx)('feFlood', {
                                      'flood-opacity': '0',
                                      result: 'BackgroundImageFix'
                                  }),
                                  (0, r.jsx)('feBlend', {
                                      in: 'SourceGraphic',
                                      in2: 'BackgroundImageFix',
                                      result: 'shape'
                                  }),
                                  (0, r.jsx)('feGaussianBlur', {
                                      result: 'effect1_foregroundBlur_1212_34971',
                                      stdDeviation: '150'
                                  })
                              ]
                          }),
                          (0, r.jsx)('clipPath', {
                              id: 'a',
                              children: (0, r.jsx)('path', {
                                  fill: '#fff',
                                  d: 'M0 0h1000v1000H0z'
                              })
                          })
                      ]
                  })
              ]
          });
      };
