(this["webpackJsonpmusic-basket"]=this["webpackJsonpmusic-basket"]||[]).push([[0],{11:function(t,e,c){t.exports={header:"Header_header__D4H30",item:"Header_item__1zMEO",active:"Header_active__r1CTI",link:"Header_link__2ob2r"}},14:function(t,e,c){t.exports={about:"About_about__-hZHm",content:"About_content__201uc",name:"About_name__3TN02",photo:"About_photo__3TvNk",bio:"About_bio__z_1FH",tag:"About_tag___dQyM"}},16:function(t,e,c){t.exports={main:"SearchTrack_main__10iAA",search:"SearchTrack_search__dkpyV",block:"SearchTrack_block__2PIYP",item:"SearchTrack_item__1mw2r"}},25:function(t,e,c){t.exports={item:"Main_item__3QEDH",main:"Main_main__2-An1"}},46:function(t,e,c){},47:function(t,e,c){},70:function(t,e,c){"use strict";c.r(e);var i=c(1),a=c(0),n=c.n(a),s=c(19),r=c.n(s),j=(c(46),c(3)),o=(c(47),c(14)),l=c.n(o),b=c(12),h=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:l.a.about,children:"About artist"}),Object(i.jsxs)("div",{className:l.a.content,children:[Object(i.jsx)("div",{className:l.a.name,children:t.artist.name}),Object(i.jsx)("div",{className:l.a.photo,children:t.artist.image[1]["#text"]}),Object(i.jsx)("div",{className:l.a.bio,children:t.artist.bio.content}),t.artist.tags.tag.map((function(t){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:l.a.tag,children:t.name})},t.id)}))]})]})},d=c(6),u=c(21),k=c(22),A=c(24),m=c(23),p=c(13),g="SET_ARTIST",E={artist:[]},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(d.a)(Object(d.a)({},t),{},{artist:e.artist});default:return t}},I=function(t){Object(A.a)(c,t);var e=Object(m.a)(c);function c(){return Object(u.a)(this,c),e.apply(this,arguments)}return Object(k.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.artistName;e||(e="Billie Eilish"),b.get("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+e+"&api_key=c5eb1cf3c2b9631ee38538f50b5239dc&format=json").then((function(e){t.props.setArtistAC(e.data.artist)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(h,Object(d.a)({},this.props))})}}]),c}(n.a.Component),R=Object(j.e)(I),C=Object(p.b)((function(t){return{artist:t.aboutPage.artist}}),{setArtistAC:function(t){return{type:g,artist:t}}})(R),U=c(10),v=c(11),f=c.n(v),x=function(t){return Object(i.jsxs)("header",{className:f.a.header,children:[Object(i.jsx)("div",{className:"img",children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJBQzc4QUY4MjE3MTFFNUE4MjVENUE1OTk0RDg5MUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJBQzc4QUU4MjE3MTFFNUE4MjVENUE1OTk0RDg5MUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTM4MzI2MUY1NzkxMUU0QkM1RERCMDRENDVBMDhDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNTM4MzI2MkY1NzkxMUU0QkM1RERCMDRENDVBMDhDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnjyRuMAABT9SURBVHja7F1djFVFEq4hoCADiD/DIIhI+BEhMBAQxIEQkfAnapT1LxqyD5tswr745BNPPvnkiyabGLMha1QUiYggLEgIjAjC4kBA/mYR0ZFhBBEYRIQw29+eumGYvQPd5/a9XadPfUkF0HPv7dNVX3d1V3V1VXt7OykUiuLopl2gUChBFAoliEKhBFEolCAKhRJEoRCP7toFZcddRmqN1PDf7zRyu5F+Rvoauc1ITyO3dNDHFSN/GPndyG9Gzhk5a+RXI6eNnDLSaqSF/64oE6o0DuIVIMH9RoYaGcIyyEiPMv3eZSPNRo6zHDPyHZNHoQQJjmojDxgZZWSkkRFG+gRu03kjR4wcNnLIyEEjbaoqJUilANdonJGxLEOEtxczyz6WveyqKZQg3jHRyAQjdexCZRFwwRqNfGNkt6pUCeJjgf2QkUksVZG8F5S+i+VrXegrQVwBt+lhI1ONDI/8XZuMbDfyFbtjCiVIl7jPSD3L4Jy9+49GGli+V1NQgnQEtmdnGpnBJMkzQI4tRjaTbhfnniAIzD3KMkbHieuw38gmlitKkPxhvJHHeOYoN06wnDTyMyXR8DOUbLkiRnHRyCVKAn8AAou3GulFSawFW8v9KYnC321kgJGBLOUGZpKNRvYoQfIBpHfMNTKHXSvfOMcL36OURLULUe6rnn+nG12L1iN6P4w3FPqW4Z3gaq03so7fTwkS8awx38g0z997zMi3Rg5QErluCfR+yPlCZH+0kQfJf7xmm5G1eZpN8kIQxC8eN7KAktwoH0AOVCMbCyLUF4S9c29KIv4YFOo8v/caI59REk9RgmQcGFWfMLLQ0/ftpGtBtqzs8sCVLAQ7J3v6ztVGPg04WypBPAC5Uk8ZmVLi91xk9wIBtR0ZHjmruC+mspvZq8TvQ198QkmelxIkY0Cw72lKMmzTAucxtlISPIstd2ki99F0Ss6jpAUyh1dyHylBMoJ5RhZRabtUUPhmHiVjBmaUmUyWtICrucLI50oQ+cCs8SwvUtMAO1HY989TgKwQMEVcaHTK78AmxYc8myhBhOI5I89TuqPECNhhr38DJTs1eQR2umZTEiOqTvF5DCgfGFmuBJGHF4y8mPKze9k9aCBFYf0GN3Vcys+/Z+R9JYismeOlFJ/Dy2M/f02OZ40bzSaIGyF+lOYczLsxzCQxEARrjpdTuFXYv8c+/mrlwg2B+BHiSLUp3K1/Zn1NknWCwA1YnGJBjkxV7N9vV/u3AuImiCe5Zjxj4b6MMry7leW6WPCTF6UgxzYe1Q6p3VsDA8kZnq1d8th6s47OZ3V9l9XKimNZWa5xjo08oik53HGI+26j4+dqWFdjlSCVQS1P964R8rXsE/+ktp4aP3EfrnX83AjWWa0SpMxrJl4wuuZWYSGOXZVf1MZLxi/cl66bG1NYd1VKkPIBW46uWbkY7d5nP1jhB+e5T11nkoWsQyVIGYBzDQtSrDmWKznKRpLlKdYkC1iXShCPwDFSnAR0OfSD3aqP1K0qu7v1Efe1LQaxLvsqQfwBZ8hdthcR51ipC/KKLdxXcp/bYhrrVAniybWa4/A8IuQIAupWbuVwiPvc5XThnCy4WtIJgkAmUrBt4x1IC0D6iEbIK4/t3Pe2qRk1rNvuSpD0wBmFmQ7PI/FQc6vCYTXrwBYzWcdKkBSocew8pKyvURsNjjWsC5dBsEYJ4g6MLrbJcTjshIQ4TVkPj2bWhe2tVmOoMtUtoyIICkjPcHgeJwH1sJMcNLBObCG2aLhUgtQ7dBjOkG9QmxSHDawb2wGxXglihyGOnbVRXSuxrpZLlL2eBN73KHGLDTc72V5eg6l8U8YMBxXZUWz6Xkqiylig3kFJZLlQnwr1uFAkGpHqVja2Hygphn0iQ+8K3UywHPAGs+6PK0G6Bu4EnGr5LIxoM2WjNA/SvcfxghRldW5WMaQ3y8BOGxVt7LYgao2doiPC3/sK62gS2RWng+6/IEF3JkojCC7MtL0TEBUPJRd168EKxztNpvR1ujqimr8LguOsqBOMSzgRpLsstB92sK5mWzw7nPtrrRKkOCZZPneRZO9azWCZUsbfAOFmssAIt7BIRAO7Wb0sbUAJUgQTHQiC7FGJtXJH80g5q8IbIFN4VsE1By67R5XCbtbZLEuCTJSiX0m7WFjM2Z42k5ZrhXbjnMPfmCDdAulyNrdhAck7ubfdoS8n6AxyPfrx6GeDncLWHrgz8EkWCcBW6V95gb+KkjsRpaxFdpLd/SR1bBNndQZJgB2eoZbP4uIaKcW8cC/gnwWRoyOe5LYNE9KedtadDYZS+rKnURLEtiRMs0MnlxsjKSl3Ol3wZsF0buNIIe3ZRfZB3bFKkATVDp2BOwElXHuGUfl58nedWTkxmdsqYSZpZR3aEqRaCZLcymqbYiDhdlWsORZlhBwdSbKI2x4atjocwraRe4KMsnzuGLmdMygHqti3n07Zw3Rue+jdrb2sS5+2ETVBbP1j3EMe+qrl+UIX5C4L9/mB23CBdenTNqIlCBL1bEuIhg5+jRZgXL5IPjpwG2x1OYICnzYMTRBktfaxeA6ZrQcDt3U2CUzHToEhZJcXVU4cZJ3eDH3YRnJLkKGWzzVR2AvrkVc1i+LBLHI7sekbLaxTnzYSJUFsR+SjAdvYg42pW0QE6cbv1CNgG456tpFcE+S7gG1EyvoUig9TyP7sTTnwnRLkxsDhKNtauyFPmT1E8SLku9nqdBDbSu4IUms5xZ8ISBDsokyOmCCTyf0iIp8EsTk+3IMCXrwTkiC223foxKuB2oiEud4RE6Q3hUsKvEr25+tr8kgQ22nzZMA2jqH4EfIdT3q2lagIcqflc6HOM+A8xegcEGQ0v2sI/OzZVqIiyO2Wz50O1D4EqKpzQJBqCheMO+3ZVqIiSD/L584Eat+9lB+Eetcznm0lKoLYXsEV6tjloBwRJNS7nvVsK1ER5DbL59oCta8mRwQJ9a5tnm0lKoL0tHzuYqD23ZEjgoR614uebSUqgtxi+dwl4S5gDAj1rpc820pUBLEtORSqpGbPHBEk1Lte9mwrURFEoRCPkASxrcoeKiX79xzZQah37eHZVqIiyB+Wz90aqH3nckSQUO96q2dbiYogtqNWr0Dt+yVHBAn1rr0820pUBPnN8rlQ6R6tOSJIqHet9mwrURHEdloPlWaQp3sPQ71rP8+2EhVBbNMM+gdq3w85Ikiod+3v2VaiIsivls+FSnXGmem2HJCjjcKd+b/Ts61ERRDbVOdQ9WRx2u1ADghygMLdnHu3Z1uJiiC2N5kOCNjG/TkgSMh3HODZVqIiiO3OycCA7USh5QsRk+MChSsI3o3sTzK25pEgqK532ZIgoWoj4R7ynRETZCeFu2t9iCVBLlPAqpqhXaxmh84Mha8jJkjId7PVaXNeXSzAtt5VyALGuJ11R4Tk2EFhbwu+37ON5JogIa8PwxS/hcLV5ioHrvI7XQ7YhmFKkJvjmOVzwylgdT02pi8iIsgX/E6hUMs69WkjURIEAarzFs/hxFvo++o2hB7NPM7aGwK34QGyO8V4nsIWLg9OEGzf2e6iSLgVaW0EBFlLMm7rssERCpw0KuFE4WHL5x6k8HVyYVyrMkyOVQJI3pt16dM2oibIIcvnhlK4QssFtLORbc0gObZy29sDt2Mc2d8adUgJktxXZ+vbjxfQXtSTXUHZCiDu5Db/LKAttjo8TuHvpRRBEGST7rN8to5kFHTD9WEfZIQkO7mtRwW0pYZ1aIN9JCCbWkpVE1uCoETmJCFthn/8rnB3ayu38bCQ9kwi+zKn+yQ0WApBkDB3zKGTq4S0G6PyP4Qu3Fdx244KaU+Vw+B2jMIlUYokCE6MNVo+i2vDJF2qCb/+HSN/JxlxkuPclneErDkKmEL219k1UsBThBIJAnxD9jssU0kW0O41Rt6kJAgXIi3lKv/2m9yWdmF9NNWhL7+R0ujugjpwt5FdlqPMNEpSJXYLM4IDLBgBZ1RwptvB/bGFZGIi68wGuyTptbuwjrQlCOop1QskSAEw1K941HyI38l3kBOHnbBDhZR1ZOVeJrmoJ/saWLskNVwaQaDs2WSXyDadR06pqegw2K0suGoZATJcmIk0i7S1vtp4htrPi9gjJB9TWFc2aCJh52+kEeQUj4Y2BEFF8plG/k0Ba7da4gjLx5ScosNZCFx7hi1PxAZwP0dfulZlHZUEUQsKFQ+Ri4RDQyjNg8S9E5QddGcd2VaP304BD0dlgSDErgk6dbDl1I0F3b8yZDQnMmbkpeBR1pENfmTdi4LE6w+wTdng8PxjlK/7BLOCQawbWzSQwOMEUu8HQWd9b/nsaF63KGRhNtmntX/vOCjmniDoMJctyzkOU7mi/Khnndhii8OAqARhbCb7ombYFZqnrpYY12oe2e/U7WddkxLEDdi92eTwPLZRF6h9BscCcju3s4kEXzUh/Y7CTY6jy+NGFqqNBsNC1oGLl7BJ8gtJJwjiGxsdRhhkjD5B8nK18oCp3Pe2mdatrNsrSpDSsMfIeofnUVLmKSOj1GYrhlHc5y6lmdazbkkJUjrWGdnm8DxSOp42co/abtlxD/f1GIfPbGOdkhLED5B2gWocLleFIXv0T5SkcSjKgzu4j6c5fKaZdXlOCeLf1Vrj+BlEcp8z0kdt2Tv6cN8+5vi5NVlwrbJIEOAzI6sdPzPfyAtKEu/keIH71gWrWYekBCkPcNrsU3JPccf240vqbnlzq14i9+30Hay7diVIeYHLVD4h97MQGO1e1oV7yQvyl1PMHEdYZy1Ze+FuGVUUSsKsJPcILPzlxaRbwGkwivvOdc3Ryrral8WXrmpvb8+y0uax0lyPs+7nEW272r0VEAREnGOM4+dwLHiZkc+z+uLdM644dHwvnvZd3gWKxh3dd6dY9OcNWGsgQu56Pwsi5B9mmRwxzCAFPMcLxzSLfuyqYOuxWblwHZCVi8RD5FalKdSHio7Ls94JsRAEwLbjiyk/u5dHugblxf9Qz+5r2mr67xl5P4aOiIkghZnk+ZSuIyqGID9oQ45nE8waOAmIw05pKq/ArfoghpkjVoIAyAt6ltLXoUJZHWSZbiL51VJ8rkVRYAE7VGlv8rrAa46VMXVMjAQhdg8WUWlXJcDd2kxxXgHdEahbNZNKO7KMrdwVWV+Q54kgBT8as8mIEr4D9am2Mll2R9Y/E7mPUNStZwnfc4RnjSjXbzETBBhLyf59qTVyL1KSor2dZ5SsdloV9wXiGsjA7VXi96EvEE/aF6sBxU4QAPv32Mf3dRQX9XB3sbRmpA/gak5imezpOxE/Qm5VS8zGkweCFEZO7OdjX99X5RPsdKGKO1K39/IiVRKwSYFtWtwJWOf5vRE3+izDM6kSpAvAWOaT2wEfGxwz8i0lO2AHA46qmC0foGQnClctD/X8/XAz11KGznMoQdyBItFzKdnrL8eFoDgphyrluPoMxaaPs/i+VAeJpkNYUAx7GCVFv/uW4Z3gSiJGtI4ychJQCeJnNsG+/8wK/FahYPVJSq5FO23kDCXXjLXxJsAlunbHRw8jt/IiGgG7fkb607X8sQGUVIkfWIG2b6YkLrQnj0aSZ4IAhQAZZAwpOgIZz5soXwFTJUgXqOGZBNem3ZfzvijURd5M2dmlU4JUCCBHPcvgnL077udoILfK+kqQnAIL34cpCagNj/xdsaGAAOhXJPB+DiWIbNxFySWchSBbVSTvBaUXgp24E/CUqloJUiqQuzSBkqDb0Iy+wzFKgpu4tm63qlQJUg5gyxUR6rEsQ4S3F27TPhZE/M+qCpUglQJiFIhco+LHSEoyh0MXqDtPSYbtYSOHKInst6mqlCASgO3i+9kFK0S5kQPVo0y/h8BiM12L1sOFQvS+VVWhBMnSQr+WyYO/Ixp+O7tqSAu5jZLzGLfQtaPCCMz9Qcl5lN8oSe+Aa/QrJVH4U0yCFl1gK0EUimDopl2gUChBFAoliEKhBFEolCAKhRJEoVCCKBRKEIVCCaJQKEEUCoUSRKFQgigUShCFQgmiUChBFAoliEKhBFEoYkH3jLW3lq6/0B7FCJoq8LsozlDPf47v9P/w+7gbBBUJWyrUDhSvHl6kHSiO3Vimdkjpg4oia0ducTHn4g7/hjEsLTMhn6HkugQboD0f85+h27Ge/NwbKKUPdAYRhsVMSBfUscAw3yI/5XY6Dwou7ZjD7WjJeB/oGkQQ4EK8kcIwOgKuyNtUWl1ftOO1FOTobKyvZrgPdAYRSI7XulBqC7stTR1G5Fp+tnAPYLHvWppinXSjdhR8/i87/bfe3IbOn1mW0T7QNYjANcirPPJRp40A+NQrLEbrJZ02EQrGvNTR1VjShc/fwAbfcpM1wxJuzzKLdkvtA3WxhKG+C8NYamlkIOsrRUbK4bzIdWlHMXLAn3/dYj3Rwm1OQw4pfaAEEboo7wxX16BgTC1FZr7aEtoBcqxzfJ8VGe4DJYjA2aO2iO+exm9uY4PujDkp27EiBTmy3AdKEIEYX0TBpRhlI/1/HKA+RTuIff889YESRCDqiiyGS11Qfllk8VwboB1Z6wMliEB0Vtp/PHxno8XvVKIdWesDJUgG0CLkO5q0D8JCA4VJMCvGdtQVIVub8D5QgghEm+B2lGK4r3X691LqOoFQr2hTF8sJPvKH6sqwLshjHyhBBKDzyPqIh+8cb7loLXc7stYHShCB2FNk9Cxl9INr1DldxOZsRrEUjdqc9YESRCCKKa6UNPNniqwf9lh8bn2R/7YkZ32gBBEIbEeuKzKCpjFOjJqLLL6/q3Y0FvHjl+SoD5QgQoG8o7Yiil5C9rtJi7owqLcc2vGWh3bUZrwPlCACAcN4vYvR8A3+sysjQY5RV6f/ljkuTFuo+CGnQjtulBVbmG3ezngfiEHWD0y5YqmFoubexK1oLOKGdGU060oYOW/Wjha6/lRf7U0M/xWyj2xL6YPg0EBhcYXCkF7tQum2OztpDix1bseNFum2iX9NZHfQSmIfKEGEAiPkX3i2mpvis2nPURQz1CZuh+uWa+GY7DpKFymX0gfqYglzsYqN1HOoeEGEju4OvvfLMvra+P1H+M/amxjnnhKIIbkPlCAZQGd/u4kqn8tUXcRQW6hy2bMS+kAJolCEhm7zKhRKEIVCCaJQKEEUCiWIQqEEUSiUIApFpvFfAQYAdCHheDRgqFIAAAAASUVORK5CYII=",alt:"logo"})}),Object(i.jsx)("div",{className:f.a.item,children:Object(i.jsx)("p",{children:"MUSIC BASKET"})}),Object(i.jsxs)("div",{className:f.a.link,children:[Object(i.jsx)("div",{className:f.a.item,children:Object(i.jsx)(U.b,{to:"/main",activeClassName:f.a.active,children:"Main"})}),Object(i.jsx)("div",{className:f.a.item,children:Object(i.jsx)(U.b,{to:"/search",activeClassName:f.a.active,children:"Search Track"})}),Object(i.jsx)("div",{className:f.a.item,children:Object(i.jsx)(U.b,{to:"/about",activeClassName:f.a.active,children:"About Artist"})})]})]})},V=c(25),D=c.n(V),Q=function(t){return Object(i.jsx)("div",{className:D.a.main,children:t.tracks.map((function(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:D.a.item,children:Object(i.jsx)("img",{src:null!=t.image[1]["#text"]?t.image[1]["#text"]:"data:image/png;base64,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"})}),Object(i.jsxs)("div",{className:D.a.item,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Name of the track:"}),Object(i.jsx)("p",{children:t.name})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Artist: "}),Object(i.jsx)(U.b,{to:"/about/"+t.artist.name,children:Object(i.jsx)("p",{onClick:function(){},children:t.artist.name})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Link to the artist page on the Last.fm service:"}),Object(i.jsx)("p",{children:t.artist.url})]})]})]},t.id)}))})},Z="SET_TRACKS",N={tracks:[]},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Z:return Object(d.a)(Object(d.a)({},t),{},{tracks:e.tracks});default:return t}},B=function(t){Object(A.a)(c,t);var e=Object(m.a)(c);function c(){return Object(u.a)(this,c),e.apply(this,arguments)}return Object(k.a)(c,[{key:"componentDidMount",value:function(){var t=this;0===this.props.tracks.length&&b.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=c5eb1cf3c2b9631ee38538f50b5239dc&format=json").then((function(e){t.props.setTracks(e.data.tracks.track)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(Q,Object(d.a)({},this.props))})}}]),c}(n.a.Component),K=Object(p.b)((function(t){return{tracks:t.mainPage.tracks}}),(function(t){return{setTracks:function(e){t(function(t){return{type:Z,tracks:t}}(e))}}}))(B),G="SET_S_TRACKS",L={s_tracks:[]},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G:return Object(d.a)(Object(d.a)({},t),{},{s_tracks:e.s_tracks});default:return t}},y=c(16),z=c.n(y),W=function(t){var e=n.a.createRef();return Object(i.jsxs)("div",{className:z.a.main,children:[Object(i.jsxs)("div",{className:z.a.search,children:[Object(i.jsx)("div",{className:z.a.block,children:Object(i.jsx)("input",{placeholder:"Enter name of track",ref:e})}),Object(i.jsx)("div",{className:z.a.block,children:Object(i.jsx)("button",{onClick:function(){var c=e.current.value;b.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track="+c+"&api_key=c5eb1cf3c2b9631ee38538f50b5239dc&format=json").then((function(e){t.setSTracks(e.data.results.trackmatches.track)})),e.current.value=""},children:"Search"})})]}),t.s_tracks.map((function(t){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:z.a.item,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Name of the track:"})," ",Object(i.jsx)("p",{children:t.name}),"  "]}),Object(i.jsxs)("div",{children:[" ",Object(i.jsx)("span",{children:"Artist:"})," ",Object(i.jsx)("p",{children:t.artist})," "]})]})},t.id)}))]})},J=Object(p.b)((function(t){return{s_tracks:t.searchPage.s_tracks}}),(function(t){return{setSTracks:function(e){t(function(t){return{type:G,s_tracks:t}}(e))}}}))(W),P=function(t){return Object(i.jsxs)("div",{className:"app-wrapper",children:[Object(i.jsx)(x,{}),Object(i.jsxs)("div",{className:"app-wrapper-content",children:[Object(i.jsx)(j.a,{path:"/main",render:function(){return Object(i.jsx)(K,{})}}),Object(i.jsx)(j.a,{path:"/search",render:function(){return Object(i.jsx)(J,{})}}),Object(i.jsx)(j.a,{path:"/about/:artistName?",render:function(){return Object(i.jsx)(C,{})}})]})]})},Y=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(e){var c=e.getCLS,i=e.getFID,a=e.getFCP,n=e.getLCP,s=e.getTTFB;c(t),i(t),a(t),n(t),s(t)}))},M=c(18),q=Object(M.b)({mainPage:S,searchPage:w,aboutPage:O}),F=Object(M.c)(q);window.store=F;var H=F;r.a.render(Object(i.jsx)(U.a,{children:Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(p.a,{store:H,children:Object(i.jsx)(P,{})})})}),document.getElementById("root")),Y()}},[[70,1,2]]]);
//# sourceMappingURL=main.53b10ab6.chunk.js.map