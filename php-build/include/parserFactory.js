    function parserFactory(sheet) {
        var parser = {
            trace: function trace() {},
            yy: {},
            symbols_: {
                "error": 2,
                "expressions": 3,
                "e": 4,
                "EOF": 5,
                "variableSequence": 6,
                "TIME_AMPM": 7,
                "TIME_24": 8,
                "number": 9,
                "STRING": 10,
                "=": 11,
                "+": 12,
                "(": 13,
                ")": 14,
                "<": 15,
                ">": 16,
                "NOT": 17,
                "-": 18,
                "*": 19,
                "/": 20,
                "^": 21,
                "E": 22,
                "FUNCTION": 23,
                "expseq": 24,
                "cell": 25,
                "FIXEDCELL": 26,
                ":": 27,
                "CELL": 28,
                "SHEET": 29,
                ";": 30,
                ",": 31,
                "VARIABLE": 32,
                "DECIMAL": 33,
                "NUMBER": 34,
                "%": 35,
                "#": 36,
                "!": 37,
                "$accept": 0,
                "$end": 1
            },
            terminals_: {
                5: "EOF",
                7: "TIME_AMPM",
                8: "TIME_24",
                10: "STRING",
                11: "=",
                12: "+",
                13: "(",
                14: ")",
                15: "<",
                16: ">",
                17: "NOT",
                18: "-",
                19: "*",
                20: "/",
                21: "^",
                22: "E",
                23: "FUNCTION",
                26: "FIXEDCELL",
                27: ":",
                28: "CELL",
                29: "SHEET",
                30: ";",
                31: ",",
                32: "VARIABLE",
                33: "DECIMAL",
                34: "NUMBER",
                35: "%",
                36: "#",
                37: "!"
            },
            productions_: [
                0, [3, 2],[4, 1],[4, 1],[4, 1],[4, 1],[4, 1],[4, 3],[4, 3],[4, 3],[4, 4],[4, 4],[4, 4],[4, 3],[4, 3],[4, 3],[4, 3],[4, 3],[4, 3],[4, 3],[4, 2],[4, 2],[4, 1],[4, 3],[4, 4],[4, 1],[4, 1],[4, 2],[25, 1],[25, 3],[25, 1],[25, 3],[25, 3],[25, 5],[24, 1],[24, 3],[24, 3],[6, 1],[6, 3],[9, 1],[9, 3],[9, 2],[2, 3],[2, 4]
            ],
            performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                /* this == yyval */

                var $0 = $$.length - 1;
                switch (yystate) {
                    case 1:
                        return $$[$0 - 1];
                        break;
                    case 2:
                        //this.$ = yy.lexer.handler.variable.apply(yy.lexer.obj, $$[$0]);
                        this.$ = sheet.getVariable($$[$0]);

                        break;
                    case 3:
                        //this.$ = yy.lexer.handler.time.apply(yy.lexer.obj, [$$[$0], true]);
                        this.$ = sheet.time($$[$0]);

                        break;
                    case 4:
                        //this.$ = yy.lexer.handler.time.apply(yy.lexer.obj, [$$[$0]]);
                        this.$ = sheet.time($$[$0]);

                        break;
                    case 5:
                        this.$ = $$[$0] * 1;

                        if (isNaN(this.$)) this.$ = 0;

                        break;
                    case 6:
                        this.$ = $$[$0].substring(1, $$[$0].length - 1);

                        break;
                    case 7:
                        this.$ = sheet.comparator.equal($$[$0 - 2], $$[$0]);
                        //this.$ = yy.lexer.handler.callFunction.apply(yy.lexer.obj, ['EQUAL', [$$[$0-2], $$[$0]]]);

                        break;
                    case 8:
                        this.$ = $$[$0 - 2] + $$[$0];

                        break;
                    case 9:
                        this.$ = $$[$0 - 1] * 1;
                        break;
                    case 10:
                        //this.$ = yy.lexer.handler.callFunction.apply(yy.lexer.obj, ['LESS_EQUAL', [$$[$0-3], $$[$0-1]]]);
                        this.$ = sheet.comparator.less_equal($$[$0 - 3], $$[$0 - 1]);

                        break;
                    case 11:
                        //this.$ = yy.lexer.handler.callFunction.apply(yy.lexer.obj, ['GREATER_EQUAL', [$$[$0-3], $$[$0-1]]]);
                        this.$ = sheet.comparator.greater_equal($$[$0 - 3], $$[$0 - 1]);

                        break;
                    case 12:
                        this.$ = ($$[$0 - 3] * 1) != ($$[$0] * 1);

                        break;
                    case 13:
                        this.$ = $$[$0 - 2] != $$[$0];

                        break;
                    case 14:
                        this.$ = sheet.comparator.greater($$[$0 - 2], $$[$0]);

                        break;
                    case 15:
                        this.$ = sheet.comparator.less($$[$0 - 2], $$[$0]);

                        break;
                    case 16:
                        this.$ = ($$[$0 - 2] * 1) - ($$[$0] * 1);

                        break;
                    case 17:
                        this.$ = ($$[$0 - 2] * 1) * ($$[$0] * 1);

                        break;
                    case 18:
                        if(parseFloat($$[$0] * 1) === 0){
                            this.$ = '#DIVISION_BY_ZERO';
                        }else{
                            this.$ = ($$[$0 - 2] * 1) / ($$[$0] * 1);
                        }

                        break;
                    case 19:
                        this.$ = Math.pow(($$[$0 - 2] * 1), ($$[$0] * 1));

                        break;
                    case 20:
                        this.$ = $$[$0] * -1;
                        if (isNaN(this.$)) this.$ = 0;

                        break;
                    case 21:
                        this.$ = $$[$0] * 1;
                        if (isNaN(this.$)) this.$ = 0;

                        break;
                    case 22:
                        this.$ = Math.E;
                        ;
                        break;
                    case 23:
                        this.$ = sheet.callFunction($$[$0 - 2]);

                        break;
                    case 24:
                        this.$ = sheet.callFunction($$[$0 - 3], $$[$0 - 1]);

                        break;
                    case 28:
                        this.$ = sheet.getCellValue($$[$0]);

                        break;
                    case 29:
                        this.$ = sheet.getCellRangeValue($$[$0 - 2], $$[$0]);

                        break;
                    case 30:
                        this.$ = sheet.getCellValue($$[$0]);

                        break;
                    case 31:
                        this.$ = sheet.getCellRangeValue($$[$0 - 2], $$[$0]);

                        break;
                    case 32:
                        this.$ = sheet.getRemoteCellValue($$[$0 - 2], $$[$0]);

                        break;
                    case 33:
                        this.$ = sheet.getRemoteCellRangeValue($$[$0 - 4], $$[$0 - 2], $$[$0]);

                        break;
                    case 34:
                        this.$ = [$$[$0]];

                        break;
                    case 35:
                        $$[$0 - 2].push($$[$0]);
                        this.$ = $$[$0 - 2];


                        break;
                    case 36:
                        $$[$0 - 2].push($$[$0]);
                        this.$ = $$[$0 - 2];


                        break;
                    case 37:
                        this.$ = [$$[$0]];

                        break;
                    case 38:
                        this.$ = ($.isArray($$[$0 - 2]) ? $$[$0 - 2] : [$$[$0 - 2]]);
                        this.$.push($$[$0]);


                        break;
                    case 39:
                        this.$ = $$[$0] * 1;

                        break;
                    case 40:
                        this.$ = ($$[$0 - 2] + '.' + $$[$0]) * 1;

                        break;
                    case 41:
                        this.$ = $$[$0 - 1] * 0.01;

                        break;
                    case 42:
                        this.$ = $$[$0 - 2] + $$[$0 - 1] + $$[$0];

                        break;
                    case 43:
                        this.$ = $$[$0 - 2] + $$[$0 - 1] + $$[$0];

                        break;
                }
            },
            table: [{
                2: 14,3: 1,4: 2,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                1: [3]
            }, {
                5: [1, 21],11: [1, 22],12: [1, 23],15: [1, 24],16: [1, 25],17: [1, 26],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30]
            }, {
                5: [2, 2],11: [2, 2],12: [2, 2],14: [2, 2],15: [2, 2],16: [2, 2],17: [2, 2],18: [2, 2],19: [2, 2],20: [2, 2],21: [2, 2],30: [2, 2],31: [2, 2],33: [1, 31]
            }, {
                5: [2, 3],11: [2, 3],12: [2, 3],14: [2, 3],15: [2, 3],16: [2, 3],17: [2, 3],18: [2, 3],19: [2, 3],20: [2, 3],21: [2, 3],30: [2, 3],31: [2, 3]
            }, {
                5: [2, 4],11: [2, 4],12: [2, 4],14: [2, 4],15: [2, 4],16: [2, 4],17: [2, 4],18: [2, 4],19: [2, 4],20: [2, 4],21: [2, 4],30: [2, 4],31: [2, 4]
            }, {
                5: [2, 5],11: [2, 5],12: [2, 5],14: [2, 5],15: [2, 5],16: [2, 5],17: [2, 5],18: [2, 5],19: [2, 5],20: [2, 5],21: [2, 5],30: [2, 5],31: [2, 5],35: [1, 32]
            }, {
                5: [2, 6],11: [2, 6],12: [2, 6],14: [2, 6],15: [2, 6],16: [2, 6],17: [2, 6],18: [2, 6],19: [2, 6],20: [2, 6],21: [2, 6],30: [2, 6],31: [2, 6]
            }, {
                2: 14,4: 33,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 34,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 35,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                5: [2, 22],11: [2, 22],12: [2, 22],14: [2, 22],15: [2, 22],16: [2, 22],17: [2, 22],18: [2, 22],19: [2, 22],20: [2, 22],21: [2, 22],30: [2, 22],31: [2, 22]
            }, {
                13: [1, 36]
            }, {
                5: [2, 25],11: [2, 25],12: [2, 25],14: [2, 25],15: [2, 25],16: [2, 25],17: [2, 25],18: [2, 25],19: [2, 25],20: [2, 25],21: [2, 25],30: [2, 25],31: [2, 25]
            }, {
                2: 37,5: [2, 26],11: [2, 26],12: [2, 26],14: [2, 26],15: [2, 26],16: [2, 26],17: [2, 26],18: [2, 26],19: [2, 26],20: [2, 26],21: [2, 26],30: [2, 26],31: [2, 26],32: [1, 38],36: [1, 20]
            }, {
                5: [2, 37],11: [2, 37],12: [2, 37],14: [2, 37],15: [2, 37],16: [2, 37],17: [2, 37],18: [2, 37],19: [2, 37],20: [2, 37],21: [2, 37],30: [2, 37],31: [2, 37],33: [2, 37],36: [1, 39]
            }, {
                5: [2, 39],11: [2, 39],12: [2, 39],14: [2, 39],15: [2, 39],16: [2, 39],17: [2, 39],18: [2, 39],19: [2, 39],20: [2, 39],21: [2, 39],30: [2, 39],31: [2, 39],33: [1, 40],35: [2, 39]
            }, {
                5: [2, 28],11: [2, 28],12: [2, 28],14: [2, 28],15: [2, 28],16: [2, 28],17: [2, 28],18: [2, 28],19: [2, 28],20: [2, 28],21: [2, 28],27: [1, 41],30: [2, 28],31: [2, 28]
            }, {
                5: [2, 30],11: [2, 30],12: [2, 30],14: [2, 30],15: [2, 30],16: [2, 30],17: [2, 30],18: [2, 30],19: [2, 30],20: [2, 30],21: [2, 30],27: [1, 42],30: [2, 30],31: [2, 30]
            }, {
                16: [1, 43]
            }, {
                32: [1, 44]
            }, {
                1: [2, 1]
            }, {
                2: 14,4: 45,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 46,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 49,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],11: [1, 47],12: [1, 10],13: [1, 8],16: [1, 48],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 51,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],11: [1, 50],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 52,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 53,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 54,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 55,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 56,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                32: [1, 57]
            }, {
                5: [2, 41],11: [2, 41],12: [2, 41],14: [2, 41],15: [2, 41],16: [2, 41],17: [2, 41],18: [2, 41],19: [2, 41],20: [2, 41],21: [2, 41],30: [2, 41],31: [2, 41],35: [2, 41]
            }, {
                11: [1, 22],12: [1, 23],14: [1, 58],15: [1, 24],16: [1, 25],17: [1, 26],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30]
            }, {
                5: [2, 20],11: [2, 20],12: [2, 20],14: [2, 20],15: [2, 20],16: [2, 20],17: [2, 20],18: [2, 20],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 20],31: [2, 20]
            }, {
                5: [2, 21],11: [2, 21],12: [2, 21],14: [2, 21],15: [2, 21],16: [2, 21],17: [2, 21],18: [2, 21],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 21],31: [2, 21]
            }, {
                2: 14,4: 61,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],14: [1, 59],18: [1, 9],22: [1, 11],23: [1, 12],24: 60,25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                5: [2, 27],11: [2, 27],12: [2, 27],14: [2, 27],15: [2, 27],16: [2, 27],17: [2, 27],18: [2, 27],19: [2, 27],20: [2, 27],21: [2, 27],30: [2, 27],31: [2, 27]
            }, {
                36: [1, 39]
            }, {
                32: [1, 62]
            }, {
                34: [1, 63]
            }, {
                26: [1, 64]
            }, {
                28: [1, 65]
            }, {
                28: [1, 66]
            }, {
                37: [1, 67]
            }, {
                5: [2, 7],11: [2, 7],12: [1, 23],14: [2, 7],15: [1, 24],16: [1, 25],17: [1, 26],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 7],31: [2, 7]
            }, {
                5: [2, 8],11: [2, 8],12: [2, 8],14: [2, 8],15: [2, 8],16: [2, 8],17: [2, 8],18: [2, 8],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 8],31: [2, 8]
            }, {
                2: 14,4: 68,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 69,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                5: [2, 15],11: [2, 15],12: [1, 23],14: [2, 15],15: [2, 15],16: [2, 15],17: [2, 15],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 15],31: [2, 15]
            }, {
                2: 14,4: 70,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                5: [2, 14],11: [2, 14],12: [1, 23],14: [2, 14],15: [2, 14],16: [2, 14],17: [2, 14],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 14],31: [2, 14]
            }, {
                5: [2, 13],11: [2, 13],12: [1, 23],14: [2, 13],15: [1, 24],16: [1, 25],17: [2, 13],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 13],31: [2, 13]
            }, {
                5: [2, 16],11: [2, 16],12: [2, 16],14: [2, 16],15: [2, 16],16: [2, 16],17: [2, 16],18: [2, 16],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 16],31: [2, 16]
            }, {
                5: [2, 17],11: [2, 17],12: [2, 17],14: [2, 17],15: [2, 17],16: [2, 17],17: [2, 17],18: [2, 17],19: [2, 17],20: [2, 17],21: [1, 30],30: [2, 17],31: [2, 17]
            }, {
                5: [2, 18],11: [2, 18],12: [2, 18],14: [2, 18],15: [2, 18],16: [2, 18],17: [2, 18],18: [2, 18],19: [2, 18],20: [2, 18],21: [1, 30],30: [2, 18],31: [2, 18]
            }, {
                5: [2, 19],11: [2, 19],12: [2, 19],14: [2, 19],15: [2, 19],16: [2, 19],17: [2, 19],18: [2, 19],19: [2, 19],20: [2, 19],21: [2, 19],30: [2, 19],31: [2, 19]
            }, {
                5: [2, 38],11: [2, 38],12: [2, 38],14: [2, 38],15: [2, 38],16: [2, 38],17: [2, 38],18: [2, 38],19: [2, 38],20: [2, 38],21: [2, 38],30: [2, 38],31: [2, 38],33: [2, 38]
            }, {
                5: [2, 9],11: [2, 9],12: [2, 9],14: [2, 9],15: [2, 9],16: [2, 9],17: [2, 9],18: [2, 9],19: [2, 9],20: [2, 9],21: [2, 9],30: [2, 9],31: [2, 9]
            }, {
                5: [2, 23],11: [2, 23],12: [2, 23],14: [2, 23],15: [2, 23],16: [2, 23],17: [2, 23],18: [2, 23],19: [2, 23],20: [2, 23],21: [2, 23],30: [2, 23],31: [2, 23]
            }, {
                14: [1, 71],30: [1, 72],31: [1, 73]
            }, {
                11: [1, 22],12: [1, 23],14: [2, 34],15: [1, 24],16: [1, 25],17: [1, 26],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 34],31: [2, 34]
            }, {
                37: [1, 74]
            }, {
                5: [2, 40],11: [2, 40],12: [2, 40],14: [2, 40],15: [2, 40],16: [2, 40],17: [2, 40],18: [2, 40],19: [2, 40],20: [2, 40],21: [2, 40],30: [2, 40],31: [2, 40],35: [2, 40]
            }, {
                5: [2, 29],11: [2, 29],12: [2, 29],14: [2, 29],15: [2, 29],16: [2, 29],17: [2, 29],18: [2, 29],19: [2, 29],20: [2, 29],21: [2, 29],30: [2, 29],31: [2, 29]
            }, {
                5: [2, 31],11: [2, 31],12: [2, 31],14: [2, 31],15: [2, 31],16: [2, 31],17: [2, 31],18: [2, 31],19: [2, 31],20: [2, 31],21: [2, 31],30: [2, 31],31: [2, 31]
            }, {
                5: [2, 32],11: [2, 32],12: [2, 32],14: [2, 32],15: [2, 32],16: [2, 32],17: [2, 32],18: [2, 32],19: [2, 32],20: [2, 32],21: [2, 32],27: [1, 75],30: [2, 32],31: [2, 32]
            }, {
                5: [2, 42],11: [2, 42],12: [2, 42],14: [2, 42],15: [2, 42],16: [2, 42],17: [2, 42],18: [2, 42],19: [2, 42],20: [2, 42],21: [2, 42],30: [2, 42],31: [2, 42],32: [2, 42],36: [2, 42]
            }, {
                5: [2, 10],11: [2, 10],12: [1, 23],14: [2, 10],15: [2, 10],16: [2, 10],17: [2, 10],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 10],31: [2, 10]
            }, {
                5: [2, 12],11: [2, 12],12: [1, 23],14: [2, 12],15: [2, 12],16: [2, 12],17: [2, 12],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 12],31: [2, 12]
            }, {
                5: [2, 11],11: [2, 11],12: [1, 23],14: [2, 11],15: [2, 11],16: [2, 11],17: [2, 11],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 11],31: [2, 11]
            }, {
                5: [2, 24],11: [2, 24],12: [2, 24],14: [2, 24],15: [2, 24],16: [2, 24],17: [2, 24],18: [2, 24],19: [2, 24],20: [2, 24],21: [2, 24],30: [2, 24],31: [2, 24]
            }, {
                2: 14,4: 76,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                2: 14,4: 77,6: 3,7: [1, 4],8: [1, 5],9: 6,10: [1, 7],12: [1, 10],13: [1, 8],18: [1, 9],22: [1, 11],23: [1, 12],25: 13,26: [1, 17],28: [1, 18],29: [1, 19],32: [1, 15],34: [1, 16],36: [1, 20]
            }, {
                5: [2, 43],11: [2, 43],12: [2, 43],14: [2, 43],15: [2, 43],16: [2, 43],17: [2, 43],18: [2, 43],19: [2, 43],20: [2, 43],21: [2, 43],30: [2, 43],31: [2, 43],32: [2, 43],36: [2, 43]
            }, {
                28: [1, 78]
            }, {
                11: [1, 22],12: [1, 23],14: [2, 35],15: [1, 24],16: [1, 25],17: [1, 26],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 35],31: [2, 35]
            }, {
                11: [1, 22],12: [1, 23],14: [2, 36],15: [1, 24],16: [1, 25],17: [1, 26],18: [1, 27],19: [1, 28],20: [1, 29],21: [1, 30],30: [2, 36],31: [2, 36]
            }, {
                5: [2, 33],11: [2, 33],12: [2, 33],14: [2, 33],15: [2, 33],16: [2, 33],17: [2, 33],18: [2, 33],19: [2, 33],20: [2, 33],21: [2, 33],30: [2, 33],31: [2, 33]
            }],
            defaultActions: {
                21: [2, 1]
            },
            parseError: function parseError(str, hash) {
                if (hash.recoverable) {
                    this.trace(str)
                } else {
                    throw new Error(str)
                }
            },
            parse: function parse(input) {
                var self = this,
                    stack = [0],
                    vstack = [null],
                    lstack = [],
                    table = this.table,
                    yytext = "",
                    yylineno = 0,
                    yyleng = 0,
                    recovering = 0,
                    TERROR = 2,
                    EOF = 1;
                var args = lstack.slice.call(arguments, 1);
                this.lexer.setInput(input);
                this.lexer.yy = this.yy;
                this.yy.lexer = this.lexer;
                this.yy.parser = this;
                if (typeof this.lexer.yylloc == "undefined") {
                    this.lexer.yylloc = {}
                }
                var yyloc = this.lexer.yylloc;
                lstack.push(yyloc);
                var ranges = this.lexer.options && this.lexer.options.ranges;
                if (typeof this.yy.parseError === "function") {
                    this.parseError = this.yy.parseError
                } else {
                    this.parseError = Object.getPrototypeOf(this).parseError
                }

                function popStack(n) {
                    stack.length = stack.length - 2 * n;
                    vstack.length = vstack.length - n;
                    lstack.length = lstack.length - n
                }

                function lex() {
                    var token;
                    token = self.lexer.lex() || EOF;
                    if (typeof token !== "number") {
                        token = self.symbols_[token] || token
                    }
                    return token
                }
                var symbol, preErrorSymbol, state, action, a, r, yyval = {},
                    p, len, newState, expected;
                while (true) {
                    state = stack[stack.length - 1];
                    if (this.defaultActions[state]) {
                        action = this.defaultActions[state]
                    } else {
                        if (symbol === null || typeof symbol == "undefined") {
                            symbol = lex()
                        }
                        action = table[state] && table[state][symbol]
                    }
                    _handle_error: if (typeof action === "undefined" || !action.length || !action[0]) {
                        var error_rule_depth;
                        var errStr = "";

                        function locateNearestErrorRecoveryRule(state) {
                            var stack_probe = stack.length - 1;
                            var depth = 0;
                            for (;;) {
                                if (TERROR.toString() in table[state]) {
                                    return depth
                                }
                                if (state === 0 || stack_probe < 2) {
                                    return false
                                }
                                stack_probe -= 2;
                                state = stack[stack_probe];
                                ++depth
                            }
                        }
                        if (!recovering) {
                            error_rule_depth = locateNearestErrorRecoveryRule(state);
                            expected = [];
                            for (p in table[state]) {
                                if (this.terminals_[p] && p > TERROR) {
                                    expected.push("'" + this.terminals_[p] + "'")
                                }
                            }
                            if (this.lexer.showPosition) {
                                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'"
                            } else {
                                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'")
                            }
                            this.parseError(errStr, {
                                text: this.lexer.match,
                                token: this.terminals_[symbol] || symbol,
                                line: this.lexer.yylineno,
                                loc: yyloc,
                                expected: expected,
                                recoverable: error_rule_depth !== false
                            })
                        } else if (preErrorSymbol !== EOF) {
                            error_rule_depth = locateNearestErrorRecoveryRule(state)
                        }
                        if (recovering == 3) {
                            if (symbol === EOF || preErrorSymbol === EOF) {
                                throw new Error(errStr || "Parsing halted while starting to recover from another error.")
                            }
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            symbol = lex()
                        }
                        if (error_rule_depth === false) {
                            throw new Error(errStr || "Parsing halted. No suitable error recovery rule available.")
                        }
                        popStack(error_rule_depth);
                        preErrorSymbol = symbol == TERROR ? null : symbol;
                        symbol = TERROR;
                        state = stack[stack.length - 1];
                        action = table[state] && table[state][TERROR];
                        recovering = 3
                    }
                    if (action[0] instanceof Array && action.length > 1) {
                        throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol)
                    }
                    switch (action[0]) {
                        case 1:
                            stack.push(symbol);
                            vstack.push(this.lexer.yytext);
                            lstack.push(this.lexer.yylloc);
                            stack.push(action[1]);
                            symbol = null;
                            if (!preErrorSymbol) {
                                yyleng = this.lexer.yyleng;
                                yytext = this.lexer.yytext;
                                yylineno = this.lexer.yylineno;
                                yyloc = this.lexer.yylloc;
                                if (recovering > 0) {
                                    recovering--
                                }
                            } else {
                                symbol = preErrorSymbol;
                                preErrorSymbol = null
                            }
                            break;
                        case 2:
                            len = this.productions_[action[1]][1];
                            yyval.$ = vstack[vstack.length - len];
                            yyval._$ = {
                                first_line: lstack[lstack.length - (len || 1)].first_line,
                                last_line: lstack[lstack.length - 1].last_line,
                                first_column: lstack[lstack.length - (len || 1)].first_column,
                                last_column: lstack[lstack.length - 1].last_column
                            };
                            if (ranges) {
                                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]]
                            }
                            r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack].concat(args));
                            if (typeof r !== "undefined") {
                                return r
                            }
                            if (len) {
                                stack = stack.slice(0, -1 * len * 2);
                                vstack = vstack.slice(0, -1 * len);
                                lstack = lstack.slice(0, -1 * len)
                            }
                            stack.push(this.productions_[action[1]][0]);
                            vstack.push(yyval.$);
                            lstack.push(yyval._$);
                            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                            stack.push(newState);
                            break;
                        case 3:
                            return true
                    }
                }
                return true
            }
        };
        /* generated by jison-lex 0.2.1 */
        var lexer = (function() {
            var lexer = {

                EOF: 1,

                parseError: function parseError(str, hash) {
                    "use strict";
                    if (this.yy.parser) {
                        this.yy.parser.parseError(str, hash)
                    } else {
                        throw new Error(str)
                    }
                },

                // resets the lexer, sets new input
                setInput: function(input) {
                    "use strict";
                    this._input = input;
                    this._more = this._backtrack = this.done = false;
                    this.yylineno = this.yyleng = 0;
                    this.yytext = this.matched = this.match = "";
                    this.conditionStack = ["INITIAL"];
                    this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    };
                    if (this.options.ranges) {
                        this.yylloc.range = [0, 0]
                    }
                    this.offset = 0;
                    return this
                },

                // consumes and returns one char from the input
                input: function() {
                    "use strict";
                    var ch = this._input[0];
                    this.yytext += ch;
                    this.yyleng++;
                    this.offset++;
                    this.match += ch;
                    this.matched += ch;
                    var lines = ch.match(/(?:\r\n?|\n).*/g);
                    if (lines) {
                        this.yylineno++;
                        this.yylloc.last_line++
                    } else {
                        this.yylloc.last_column++
                    } if (this.options.ranges) {
                        this.yylloc.range[1]++
                    }
                    this._input = this._input.slice(1);
                    return ch
                },

                // unshifts one char (or a string) into the input
                unput: function(ch) {
                    "use strict";
                    var len = ch.length;
                    var lines = ch.split(/(?:\r\n?|\n)/g);
                    this._input = ch + this._input;
                    this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                    this.offset -= len;
                    var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length - 1);
                    this.matched = this.matched.substr(0, this.matched.length - 1);
                    if (lines.length - 1) {
                        this.yylineno -= lines.length - 1
                    }
                    var r = this.yylloc.range;
                    this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                    };
                    if (this.options.ranges) {
                        this.yylloc.range = [r[0], r[0] + this.yyleng - len]
                    }
                    this.yyleng = this.yytext.length;
                    return this
                },

                // When called from action, caches matched text and appends it on next action
                more: function() {
                    "use strict";
                    this._more = true;
                    return this
                },

                // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
                reject: function() {
                    "use strict";
                    if (this.options.backtrack_lexer) {
                        this._backtrack = true
                    } else {
                        return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    }
                    return this
                },

                // retain first n characters of the match
                less: function(n) {
                    "use strict";
                    this.unput(this.match.slice(n))
                },

                // displays already matched input, i.e. for error messages
                pastInput: function() {
                    "use strict";
                    var past = this.matched.substr(0, this.matched.length - this.match.length);
                    return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "")
                },

                // displays upcoming input, i.e. for error messages
                upcomingInput: function() {
                    "use strict";
                    var next = this.match;
                    if (next.length < 20) {
                        next += this._input.substr(0, 20 - next.length)
                    }
                    return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "")
                },

                // displays the character position where the lexing error occurred, i.e. for error messages
                showPosition: function() {
                    "use strict";
                    var pre = this.pastInput();
                    var c = new Array(pre.length + 1).join("-");
                    return pre + this.upcomingInput() + "\n" + c + "^"
                },

                // test the lexed token: return FALSE when not a match, otherwise return token
                test_match: function(match, indexed_rule) {
                    "use strict";
                    var token, lines, backup;
                    if (this.options.backtrack_lexer) {
                        backup = {
                            yylineno: this.yylineno,
                            yylloc: {
                                first_line: this.yylloc.first_line,
                                last_line: this.last_line,
                                first_column: this.yylloc.first_column,
                                last_column: this.yylloc.last_column
                            },
                            yytext: this.yytext,
                            match: this.match,
                            matches: this.matches,
                            matched: this.matched,
                            yyleng: this.yyleng,
                            offset: this.offset,
                            _more: this._more,
                            _input: this._input,
                            yy: this.yy,
                            conditionStack: this.conditionStack.slice(0),
                            done: this.done
                        };
                        if (this.options.ranges) {
                            backup.yylloc.range = this.yylloc.range.slice(0)
                        }
                    }
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) {
                        this.yylineno += lines.length
                    }
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) {
                        this.yylloc.range = [this.offset, this.offset += this.yyleng]
                    }
                    this._more = false;
                    this._backtrack = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) {
                        this.done = false
                    }
                    if (token) {
                        return token
                    } else if (this._backtrack) {
                        for (var k in backup) {
                            this[k] = backup[k]
                        }
                        return false
                    }
                    return false
                },

                // return next match in input
                next: function() {
                    "use strict";
                    if (this.done) {
                        return this.EOF
                    }
                    if (!this._input) {
                        this.done = true
                    }
                    var token, match, tempMatch, index;
                    if (!this._more) {
                        this.yytext = "";
                        this.match = ""
                    }
                    var rules = this._currentRules();
                    for (var i = 0; i < rules.length; i++) {
                        tempMatch = this._input.match(this.rules[rules[i]]);
                        if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                            match = tempMatch;
                            index = i;
                            if (this.options.backtrack_lexer) {
                                token = this.test_match(tempMatch, rules[i]);
                                if (token !== false) {
                                    return token
                                } else if (this._backtrack) {
                                    match = false;
                                    continue
                                } else {
                                    return false
                                }
                            } else if (!this.options.flex) {
                                break
                            }
                        }
                    }
                    if (match) {
                        token = this.test_match(match, rules[index]);
                        if (token !== false) {
                            return token
                        }
                        return false
                    }
                    if (this._input === "") {
                        return this.EOF
                    } else {
                        return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    }
                },

                // return next match that has a token
                lex: function lex() {
                    "use strict";
                    var r = this.next();
                    if (r) {
                        return r
                    } else {
                        return this.lex()
                    }
                },

                // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
                begin: function begin(condition) {
                    "use strict";
                    this.conditionStack.push(condition)
                },

                // pop the previously active lexer condition state off the condition stack
                popState: function popState() {
                    "use strict";
                    var n = this.conditionStack.length - 1;
                    if (n > 0) {
                        return this.conditionStack.pop()
                    } else {
                        return this.conditionStack[0]
                    }
                },

                // produce the lexer rule set which is active for the currently active lexer condition state
                _currentRules: function _currentRules() {
                    "use strict";
                    if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    } else {
                        return this.conditions["INITIAL"].rules
                    }
                },

                // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
                topState: function topState(n) {
                    "use strict";
                    n = this.conditionStack.length - 1 - Math.abs(n || 0);
                    if (n >= 0) {
                        return this.conditionStack[n]
                    } else {
                        return "INITIAL"
                    }
                },

                // alias for begin(condition)
                pushState: function pushState(condition) {
                    "use strict";
                    this.begin(condition)
                },

                // return the number of states currently on the stack
                stateStackSize: function stateStackSize() {
                    "use strict";
                    return this.conditionStack.length
                },
                options: {},
                performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

                    var YYSTATE = YY_START;
                    switch ($avoiding_name_collisions) {
                        case 0:
                            /* skip whitespace */
                            break;
                        case 1:
                            return 10;
                            break;
                        case 2:
                            return 10;
                            break;
                        case 3:
                            return 29;
                            break;
                        case 4:
                            return 23;
                            break;
                        case 5:
                            return 7;
                            break;
                        case 6:
                            return 8;
                            break;
                        case 7:
                            if (sheet.obj.type == 'cell') return 29;
                            return 32;


                            break;
                        case 8:
                            if (sheet.obj.type == 'cell') return 26;
                            return 32;


                            break;
                        case 9:
                            if (sheet.obj.type == 'cell') return 28;
                            return 32;


                            break;
                        case 10:
                            return 23;
                            break;
                        case 11:
                            return 32;
                            break;
                        case 12:
                            return 32;
                            break;
                        case 13:
                            return 34;
                            break;
                        case 14:
                            /* skip whitespace */
                            break;
                        case 15:
                            return ' ';
                            break;
                        case 16:
                            return 33;
                            break;
                        case 17:
                            return 27;
                            break;
                        case 18:
                            return 30;
                            break;
                        case 19:
                            return 31;
                            break;
                        case 20:
                            return 19;
                            break;
                        case 21:
                            return 20;
                            break;
                        case 22:
                            return 18;
                            break;
                        case 23:
                            return 12;
                            break;
                        case 24:
                            return 21;
                            break;
                        case 25:
                            return 13;
                            break;
                        case 26:
                            return 14;
                            break;
                        case 27:
                            return 16;
                            break;
                        case 28:
                            return 15;
                            break;
                        case 29:
                            return 17;
                            break;
                        case 30:
                            return 'PI';
                            break;
                        case 31:
                            return 22;
                            break;
                        case 32:
                            return '"';
                            break;
                        case 33:
                            return "'";
                            break;
                        case 34:
                            return "!";
                            break;
                        case 35:
                            return 11;
                            break;
                        case 36:
                            return 35;
                            break;
                        case 37:
                            return 36;
                            break;
                        case 38:
                            return 5;
                            break;
                    }
                },
                rules: [
                    /^(?:\s+)/,
                    /^(?:"(\\["]|[^"])*")/,
                    /^(?:'(\\[']|[^'])*')/,
                    /^(?:#[A-Za-z0-9_]+)/,
                    /^(?:[A-Za-z]{1,}[A-Za-z_0-9]+(?=[(]))/,
                    /^(?:([0]?[1-9]|1[0-2])[:][0-5][0-9]([:][0-5][0-9])?[ ]?(AM|am|aM|Am|PM|pm|pM|Pm))/,
                    /^(?:([0]?[0-9]|1[0-9]|2[0-3])[:][0-5][0-9]([:][0-5][0-9])?)/,
                    /^(?:[A-Za-z0-9_]+>[A-Za-z0-9_]+)/,
                    /^(?:\$[A-Za-z]+\$[0-9]+)/,
                    /^(?:[A-Za-z]+[0-9]+)/,
                    /^(?:[A-Za-z]+(?=[(]))/,
                    /^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/,
                    /^(?:[A-Za-z_]+)/,
                    /^(?:[0-9]+)/,
                    /^(?:\$)/,
                    /^(?: )/,
                    /^(?:[.])/,
                    /^(?::)/,
                    /^(?:;)/,
                    /^(?:,)/,
                    /^(?:\*)/,
                    /^(?:\/)/,
                    /^(?:-)/,
                    /^(?:\+)/,
                    /^(?:\^)/,
                    /^(?:\()/,
                    /^(?:\))/,
                    /^(?:>)/,
                    /^(?:<)/,
                    /^(?:NOT\b)/,
                    /^(?:PI\b)/,
                    /^(?:E\b)/,
                    /^(?:")/,
                    /^(?:')/,
                    /^(?:!)/,
                    /^(?:=)/,
                    /^(?:%)/,
                    /^(?:[#])/,
                    /^(?:$)/
                ],
                conditions: {
                    "INITIAL": {
                        "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                        "inclusive": true
                    }
                }
            };
            return lexer;
        })();
        parser.lexer = lexer;

        function Parser() {
            this.yy = {};
        }

        Parser.prototype = parser;
        parser.Parser = Parser;

        return new Parser;
    }