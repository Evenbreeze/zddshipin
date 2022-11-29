console.log('\n' + ' %c 找洞洞 %c' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0; font-size:24px;', 'background: #fadfa3; padding:5px 0; font-size:12px;');
console.log('\n' + ' %c zdd88.Com %c HTTPS://zdd88.COM ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0; font-size:24px;', 'background: #fadfa3; padding:5px 0; font-size:24px;');
var madou = {
    'load': function() {
        var width = $(window).width();
        if (width < 820) {
            var load_state = getCookie('load_state');
            var load_img = getCookie('load_img');
            var load_url = getCookie('load_url');
            var load_time = getCookie('load_time');
            var loaderElement = ('<div class="loader" id="loader"><a id="loader_link" href="' + load_url + '" target="_blank"><img  src="' + load_img + '" alt="loading"> <div class="num" id="num"></div></a></div>');
            var loader = sessionStorage.getItem('loader');
            if (load_state == 1) {
                if (loader == null) {
                    document.write(loaderElement);
                    var nums = Number(load_time);
                    var timer = setInterval(function() {
                        nums--;
                        document.getElementById('num').innerHTML = nums;
                        if (nums === 0) {
                            $('#num').remove();
                            $('#loader_link').append('<i class="num fa fa-times" id="fa-times"></i>');
                            clearInterval(timer);
                            $('#fa-times').click(function(e) {
                                e.preventDefault();
                                sessionStorage.setItem('loader', '1');
                                $('#loader').remove();
                                location.reload();
                            });
                        }
                    }, 1000);
                };
            };
        }

        function getCookie(name) {
            var result, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
            if (result = document.cookie.match(reg)) return unescape(result[2]);
            else return null;
        }
    }(),
    'setCopy': function(value, msg) {
        var arr = '4|3|5|1|2|0'.split('|'),
            i = 0;
        while (true) {
            switch (arr[i++]) {
                case '0':
                    layer.msg(msg + '复制成功！');
                    continue;
                case '1':
                    document.execCommand('Copy');
                    continue;
                case '2':
                    $('#url_Copy').remove();
                    continue;
                case '3':
                    var urlCopyObj = document.getElementById('url_Copy');
                    continue;
                case '4':
                    $('body').append('<input  id=\'url_Copy\' value=' + value + ' />');
                    continue;
                case '5':
                    urlCopyObj.select();
                    continue;
            }
            break;
        }
    },
    'addEvent': function addEvent(obj, e, objects) {
        if (obj.attachEvent) {
            obj.attachEvent('on' + e, function() {
                objects.call(obj);
            });
        } else {
            obj.addEventListener(e, objects, false);
        }
    },
    'unique': function(arr1, arr2) {
        var arr = [];
        var res = [];
        for (var j = 0; j < arr1.length; j++) {
            console.log(arr.indexOf(arr1[j][arr2]));
            if (arr.indexOf(arr1[j][arr2]) == -1) {
                arr.push(arr1[j][arr2]);
                res.push(arr1[j]);
            } else {}
        }
        return res;
    },
    'browser': {
        'url': document.URL,
        'domain': document.domain,
        'title': document.title,
        'urlpath': document.location.pathname,
        'language': (navigator.browserLanguage || navigator.language).toLowerCase(),
        'canvas': function() {
            return !!document.createElement('canvas').getContext;
        }(),
        'useragent': function() {
            var userAgent = navigator.userAgent;
            return {
                'mobile': !!userAgent.match(/AppleWebKit.*Mobile.*/),
                'ios': !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                'android': (-1 < userAgent.indexOf('Android')) || (-1 < userAgent.indexOf('Linux')),
                'iPhone': (-1 < userAgent.indexOf('iPhone')) || (-1 < userAgent.indexOf('Mac')),
                'iPad': (-1 < userAgent.indexOf('iPad')),
                'trident': (-1 < userAgent.indexOf('Trident')),
                'presto': (-1 < userAgent.indexOf('Presto')),
                'webKit': (-1 < userAgent.indexOf('AppleWebKit')),
                'gecko': (-1 < userAgent.indexOf('Gecko')) && (-1 === userAgent.indexOf('KHTML')),
                'weixin': (-1 < userAgent.indexOf('MicroMessenger'))
            };
        }()
    },
    'mobile': {
        'scroll': function(o, curr) {
            if ($(o).offset()) {
                var offset = ($(o).offset().left + $(curr).scrollLeft() - $(curr).offset().left);
                var oven = ($(curr).width() - $(o).width() / 2);
                $(curr).scrollLeft(offset - oven);
            }
        }
    },
    'invite': function() {
        function getParams(p) {
            var str = window.location.search.substring(1);
            var arr = str.split('&');
            for (var i = 0; i < arr.length; i++) {
                var arr1 = arr[i].split('=');
                if (arr1[0] == p) {
                    return arr1[1];
                }
            }
            return false;
        }
        var invite = getParams('invite');
        if (invite == 0) {} else {
            document.cookie = ('invite=' + invite);
        }

        function getCooki(c) {
            var cookiess = document.cookie;
            var arr = cookiess.split('; ');
            for (var j = 0; j < arr.length; j++) {
                var arr2 = arr[j].split('=');
                if (c == arr2[0]) {
                    return arr2[1];
                }
            }
            return '';
        }
        var invites = getCooki('invite');
        $('#codes').attr('value', invites);
    },
    'swiper': function() {
        $.getScript(maccms.path + '/assets/js/swiper.min.js', function() {
            var _0x19579c = new Swiper('.swiper-container', {
                'pagination': {
                    'el': '.swiper-pagination'
                },
                'loop': true,
                'autoplay': {
                    'delay': 4000,
                    'disableOnInteraction': false
                },
                'navigation': {
                    'nextEl': '.swiper-button-next',
                    'prevEl': '.swiper-button-prev'
                }
            });
            var _0x19579c = new Swiper('.actor-swiper', {
                'slidesPerView': 3,
                'spaceBetween': 10
            });
        });
    },
    'countdown': function() {
        $.getScript(maccms.path + '/assets/js/countdown.js', function() {
            $(function() {
                $('.countdown').each(function() {
                    $(this).countdownsync({
                        'dayTag': '',
                        'hourTag': '<label class=\'tt hh dib vam\'>00</label><span> 时 </span>',
                        'minTag': '<label class=\'tt mm dib vam\'>00</label><span> 分 </span>',
                        'secTag': '<label class=\'tt ss dib vam\'>00</label><span> 秒</span>',
                        'dayClass': '.dd',
                        'hourClass': '.hh',
                        'minClass': '.mm',
                        'secClass': '.ss',
                        'isDefault': false,
                        'showTemp': 1
                    });
                });
            });
        });
    },
    'app': function() {
        $('.download').click(function() {
            window.location.href = MAC.Cookie.Get('appurl');
        });
    },
    'menu': function() {
        $('.menu-hover').mouseenter(function() {
            $('.menu-tips').removeClass('hidden');
        });
        $('.menu-tips,.menu-popover').mouseleave(function() {
            $('.menu-tips').addClass('hidden');
        });
        $('.menu-tab').click(function() {
            var _0x2bf56c = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.searchItems')['eq'](_0x2bf56c).show().siblings().hide();
        });
        $('.user-hover').mouseenter(function() {
            $('.user-tips').removeClass('hidden');
        });
        $('.user-tips,.user-popover').mouseleave(function() {
            $('.user-tips').addClass('hidden');
        });
        $('.menu_btn').click(function() {
            $('.over').show();
            $('body').css('overflow', 'hidden');
        });
        $('.search-container').click(function() {
            $('.over').hide();
            $('body').css('overflow', '');
        });
        $('.video-content').click(function() {
            $(this).toggleClass('active');
        });
    },
    'search': function() {
        $('#search')['on']('click', function(_0x3ffd10) {
            $('.search-history').toggleClass('hidden');
            $(document).one('click', function() {
                $('.search-history').toggleClass('hidden');
            });
            _0x3ffd10.stopPropagation();
        });
        $('.search-history')['on']('click', function(_0xbb24e3) {
            _0xbb24e3.stopPropagation();
        });
    },
    'images': function() {
        $.getScript(maccms.path + '/assets/js/jquery.lazyload.js', function() {
            $('.lazyload').lazyload({
                'effect': 'fadeIn',
                'threshold': 500,
                'failurelimit': 20
            });
        });
    },
    'popup': function() {
        var _0x8222c7 = sessionStorage.getItem('popup');
        if (_0x8222c7 == null) {
            $('body').css('overflow', 'hidden');
            $('body').append('<div class=\'v-modal\' style=\'z-index: 2004;\'></div>');
            $('.indexDialog,.yt-container').show();
            $('.popup-close,.v-modal').click(function() {
                $('body').css('overflow', '');
                $('.v-modal').remove();
                $('.indexDialog,.yt-container').remove();
                sessionStorage.setItem('popup', '1');
            });
        };
        $('#btn-share').click(function() {
            $('body').addClass('el-popup-parent--hidden');
            $('body').append('<div class=\'v-modal\' style=\'z-index: 2004;\'></div>');
            $('.dialog2').fadeIn();
        });
        $('.el-icon-close').click(function() {
            $('body').removeClass('el-popup-parent--hidden');
            $('.v-modal').remove();
            $('.dialog2').fadeOut();
        });
    },
    'playlist': function() {
        $('#plays a').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            index = $('#plays a').index(this);
            $('#play-list #playsx')['eq'](index).fadeIn(800).siblings().hide();
            $('#play-list #playsx')['eq'](index).addClass('desc').siblings().removeClass('desc');
        });
        $('.play-sort-btn').click(function() {
            var _0x1e30a0 = $('.desc').find('li');
            var _0x35cbcf = _0x1e30a0.length;
            for (var _0x37622d = 0; _0x37622d < _0x35cbcf; _0x37622d++) {
                for (var _0x109df5 = _0x37622d; _0x109df5 < _0x35cbcf; _0x109df5++) {
                    $(_0x1e30a0)['eq'](_0x109df5).insertBefore($(_0x1e30a0)['eq'](_0x37622d));
                    $(_0x1e30a0)['eq'](_0x37622d).insertAfter($(_0x1e30a0)['eq'](_0x109df5));
                }
            }
            return;
        });
    },
    'comments': function() {
        $('.send,.buut').click(function() {
            $('.send-content').addClass('show');
            $('body').addClass('van-overflow-hidden');
            $('#send').show();
        });
        $('#send,.van-icon-arrow-down').click(function() {
            $('body').removeClass('van-overflow-hidden');
            $('.send-content').removeClass('show');
            $('#send').hide();
        });
        $('.comment_face_panel').click(function() {
            $('.comment_face_box').toggle();
        });
        $('.commentx').click(function() {
            $('.comments-content').addClass('show');
            $('body').addClass('van-overflow-hidden');
            $('#comments').show();
        });
        $('#comments,.van-icon-cross').click(function() {
            $('body').removeClass('van-overflow-hidden');
            $('.comments-content').removeClass('show');
            $('#comments').hide();
        });
    },
    'gotop': function() {
        $('.gotop').hide();
        $(function() {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 100) {
                    $('.van-sticky').addClass('van-sticky--fixed');
                    $('#sticky').css('height', '44px');
                    $('.comments').show();
                } else {
                    $('.van-sticky').removeClass('van-sticky--fixed');
                    $('#sticky').css('height', '');
                    $('.comments').hide();
                }
                if ($(window).scrollTop() > 300) {
                    $('.gotop').fadeIn(300);
                } else {
                    $('.gotop').fadeOut(200);
                }
            });
            $('.gotop').click(function() {
                $('body,html').animate({
                    'scrollTop': 0
                }, 300);
                return false;
            });
        });
    },
    'change': function() {
        var _0x25e46d = 1;
        var _0x3fee34 = 1;
        $('.madou_change').click(function(_0x14f1f7) {
            var _0x25e46d = $('.madou_change').index(this);
            $('.madou_list').each(function(_0x14f1f7, _0x92c277) {
                var _0x5d1d91 = $('.madou_list').index(this);
                if (_0x5d1d91 == _0x25e46d) {
                    if (_0x3fee34 < 3) {
                        $(this).find('.madou' + _0x3fee34).addClass('hidden').removeClass('show').addClass('hidden');
                        $(this).find('.madou' + _0x3fee34 + 1).removeClass('hidden').addClass('show');
                        $(this).find('.madou' + _0x3fee34 + 2).removeClass('show').addClass('hidden');
                        _0x3fee34++;
                    } else {
                        $(this).find('.madou' + _0x3fee34).removeClass('show').addClass('hidden');
                        $(this).find('.madou' + 1).removeClass('hidden').addClass('show');
                        _0x3fee34 = 1;
                    }
                }
            });
        });
    },
    'more': function() {
        var _0x478c0f = false;
        $(window).scroll(function() {
            if (!_0x478c0f && ($(window).scrollTop() + $(window).height() >= $(document).height() - 250)) {
                _0x478c0f = true;
                _0x5ab8c0();
            }
        });

        function _0x5ab8c0() {
            var _0x2d96d0 = $('.madou_more').attr('href');
            if (_0x2d96d0 != undefined) {
                $.ajax({
                    'url': _0x2d96d0,
                    'type': 'get',
                    'error': function(_0x5c9f37) {},
                    'success': function(_0x4d7c26) {
                        var _0x12fb7d = $(_0x4d7c26).find('.video-surface');
                        $('#content').append(_0x12fb7d.fadeIn(500));
                        var _0x36fa15 = $(_0x4d7c26).find('.madou_more').attr('href');
                        if (_0x36fa15 != _0x2d96d0) {
                            $('.madou_more').attr('href', _0x36fa15);
                            $('.madou_more').hide();
                            setTimeout('$(\'.madou_more\').show();', 2000);
                        } else {
                            $('.madou_more').remove();
                            $('.van-list__finished-text').show();
                        }
                        _0x478c0f = false;
                    }
                });
            }
            return false;
        }
    }
};
$(function() {
    var _0x3b5a5a = '8|6|9|10|1|5|11|2|3|4|7|12|0'.split('|'),
        _0x2dfc3a = 0;
    while (true) {
        switch (_0x3b5a5a[_0x2dfc3a++]) {
            case '0':
                madou.more();
                continue;
            case '1':
                madou.app();
                continue;
            case '2':
                madou.images();
                continue;
            case '3':
                madou.popup();
                continue;
            case '4':
                madou.playlist();
                continue;
            case '5':
                madou.menu();
                continue;
            case '6':
                madou.swiper();
                continue;
            case '7':
                madou.gotop();
                continue;
            case '8':
                madou.invite();
                continue;
            case '9':
                madou.mobile.scroll('.van-tab--active', '.van-tabs__nav');
                continue;
            case '10':
                madou.countdown();
                continue;
            case '11':
                madou.search();
                continue;
            case '12':
                madou.change();
                continue;
        }
        break;
    }
});