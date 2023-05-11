"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var BootstrapperConstants = (function () {
                function BootstrapperConstants() {
                }
                BootstrapperConstants.Script = "script";
                BootstrapperConstants.Scripts = "/scripts/";
                BootstrapperConstants.WebChatVersionScripts = "/WebChatControl/scripts/";
                BootstrapperConstants.CustomizationVersionScripts = "/v2scripts/";
                BootstrapperConstants.Lib = "/lib/";
                BootstrapperConstants.Head = "head";
                BootstrapperConstants.Body = "body";
                BootstrapperConstants.Meta = "meta";
                BootstrapperConstants.Viewport = "viewport";
                BootstrapperConstants.ViewportMetaContent = "width=device-width, initial-scale=1.0, maximum-scale=1";
                BootstrapperConstants.FormatDetection = "format-detection";
                BootstrapperConstants.FormatDetectionMetaContent = "telephone=no";
                BootstrapperConstants.HostName = "hostname";
                BootstrapperConstants.SRC = "src";
                BootstrapperConstants.ID = "id";
                BootstrapperConstants.Html = "html";
                BootstrapperConstants.Iframe = "iframe";
                BootstrapperConstants.ALLOW = "allow";
                BootstrapperConstants.AllowFullScreen = "allowfullscreen";
                BootstrapperConstants.WebKitAllowFullScreen = "webkitallowfullscreen";
                BootstrapperConstants.MozillaAllowFullScreen = "mozallowfullscreen";
                BootstrapperConstants.DataLcwVersion = "data-lcw-version";
                BootstrapperConstants.ScriptSelector = "script#";
                BootstrapperConstants.MicrosoftOmnichannelLCWidget = "Microsoft_Omnichannel_LCWidget";
                BootstrapperConstants.JavascriptFlag = "text/javascript";
                BootstrapperConstants.InitializerScriptDownloadTriggeredFlag = "isOmniChannelBootstrapperWebChatDownloadTriggered";
                BootstrapperConstants.InitializerScriptPath = "LiveChatWidgetScripts.min.js";
                BootstrapperConstants.LibsScriptPath = "LiveChatWidgetLibs.min.js";
                BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId = "Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window";
                BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageStyleId = "Microsoft_Omnichannel_LCWidget_Chat_Iframe_Style";
                BootstrapperConstants.AllowValues = "microphone *; camera *; geolocation *; autoplay;";
                BootstrapperConstants.DataAppId = "data-app-id";
                BootstrapperConstants.DataOrgUrl = "data-org-url";
                BootstrapperConstants.DataOrgId = "data-org-id";
                BootstrapperConstants.ReconnectId = "oc.reconnectid";
                BootstrapperConstants.DisableTelemetry = "data-disable-telemetry";
                BootstrapperConstants.OpenChatInPopOutWindow = "data-open-in-window";
                BootstrapperConstants.SuggestedActionLayout = "data-suggested-action-layout";
                BootstrapperConstants.HideMinimizeButton = "data-hide-minimize-button";
                BootstrapperConstants.EnableCustomCloseButtonText = "data-custom-close-button-text";
                BootstrapperConstants.URLDelimiter = "&";
                BootstrapperConstants.EndURLSeparator = "?";
                BootstrapperConstants.ChatHTMLPath = "/htmls/chat.html";
                BootstrapperConstants.Equal = "=";
                BootstrapperConstants.Class = "class";
                BootstrapperConstants.Style = "style";
                BootstrapperConstants.Link = "link";
                BootstrapperConstants.Href = "href";
                BootstrapperConstants.Rel = "rel";
                BootstrapperConstants.StyleSheet = "stylesheet";
                BootstrapperConstants.Type = "type";
                BootstrapperConstants.TextCss = "text/css";
                BootstrapperConstants.Title = "title";
                BootstrapperConstants.LiveChatWidgetHideChatButton = "data-hide-chat-button";
                BootstrapperConstants.RenderOnMobileDevice = "data-render-mobile";
                BootstrapperConstants.WidgetFontFamily = "data-font-family-override";
                BootstrapperConstants.WidgetThemeColor = "data-color-override";
                BootstrapperConstants.SDK = "SDK";
                BootstrapperConstants.Return = "return";
                BootstrapperConstants.SPACE = " ";
                BootstrapperConstants.Microsoft = "Microsoft";
                BootstrapperConstants.Dynamic365 = "Dynamic365";
                BootstrapperConstants.Portal = "Portal";
                BootstrapperConstants.User = "User";
                BootstrapperConstants.ScriptBootstrapperPath = "scripts/LiveChatBootstrapper.js";
                BootstrapperConstants.FrameStyleCssPath = "WebChatControl/styles/LiveChatWidgetFrame.css";
                BootstrapperConstants.FrameAutofillStyleCssPath = "WebChatControl/styles/LCWAutofillFrame.min.css";
                BootstrapperConstants.EnableAutofill = "data-enable-lcw-autofill";
                BootstrapperConstants.BypassCache = "data-bypass-cache";
                BootstrapperConstants.PopoutTarget = "Omnichannel Chat";
                BootstrapperConstants.PopoutTab = "popOutTab";
                BootstrapperConstants.Undefined = 'undefined';
                BootstrapperConstants.ContactId = "contactId";
                BootstrapperConstants.EnableNewLineMarkdownSupport = "data-enable-newline";
                BootstrapperConstants.EnableMakrdownMessageFormatting = "data-enable-markdown";
                BootstrapperConstants.EnableSSOMagicCode = "data-enable-sso-magic-code";
                BootstrapperConstants.EnableDisconnectAlert = "data-enable-disconnect-alert";
                BootstrapperConstants.EnableV2WidgetLoad = "v2";
                BootstrapperConstants.FeatureNameToRedirectWidgetLoad = "ModernLcwV2Enabled";
                BootstrapperConstants.PathToCheckIfV2IsEnabled = "/livechatconnector/v2/lcwfcsdetails/" + BootstrapperConstants.FeatureNameToRedirectWidgetLoad + "/";
                BootstrapperConstants.HyperlinkTextOverride = "data-hyperlink-text-override";
                return BootstrapperConstants;
            }());
            LiveChatWidget.BootstrapperConstants = BootstrapperConstants;
            var StyleConstants = (function () {
                function StyleConstants() {
                }
                StyleConstants.Transparent = "transparent";
                StyleConstants.BackgroundColor = "background-color";
                StyleConstants.FrameBorder = "frameBorder";
                StyleConstants.AllowTransparency = "allowTransparency";
                StyleConstants.BorderWidth = "border-width";
                StyleConstants.ZIndex = "z-index";
                StyleConstants.Position = "position";
                StyleConstants.Right = "right";
                StyleConstants.Bottom = "bottom";
                StyleConstants.None = "none";
                return StyleConstants;
            }());
            LiveChatWidget.StyleConstants = StyleConstants;
            var DefaultCssValues = (function () {
                function DefaultCssValues() {
                }
                DefaultCssValues.FrameBorderWidth = "0px";
                DefaultCssValues.AllowTransparency = true;
                DefaultCssValues.IFramePosition = "fixed";
                DefaultCssValues.IFrameBackgroundColor = "transparent";
                DefaultCssValues.IFrameZIndex = "999999";
                return DefaultCssValues;
            }());
            LiveChatWidget.DefaultCssValues = DefaultCssValues;
            var EventConstants = (function () {
                function EventConstants() {
                }
                EventConstants.message = "message";
                EventConstants.keydown = "keydown";
                EventConstants.setContextProvider = "setContextProvider";
                EventConstants.getContextProvider = "getContextProvider";
                EventConstants.removeContextProvider = "removeContextProvider";
                EventConstants.setAuthTokenProvider = "setAuthTokenProvider";
                EventConstants.setAuthCodeProvider = "setAuthCodeProvider";
                EventConstants.getAuthTokenProvider = "getAuthTokenProvider";
                EventConstants.removeAuthTokenProvider = "removeAuthTokenProvider";
                EventConstants.getContactInfoRequest = "getContactInfoRequest";
                EventConstants.getContactInfoResponse = "getContactInfoResponse";
                EventConstants.LcwReady = "lcw:ready";
                EventConstants.getAgentAvailabilityFinished = "lcw:getAgentAvailability";
                EventConstants.LcwStartChat = "lcw:startChat";
                EventConstants.LcwCloseChat = "lcw:closeChat";
                EventConstants.lcwMinimizeChat = "lcw:onMinimize";
                EventConstants.lcwOnMaximize = "lcw:onMaximize";
                EventConstants.lcwOnClose = "lcw:onClose";
                EventConstants.lcwOnPopoutClose = "lcw:onPopoutClose";
                EventConstants.lcwOnMessageReceived = "lcw:onMessageReceived";
                EventConstants.lcwOnHistoryMessageReceived = "lcw:onHistoryMessageReceived";
                EventConstants.lcwOnPopoutMessageReceived = "lcw:onPopoutMessageReceived";
                EventConstants.lcwOnPopoutHistoryMessageReceived = "lcw:onPopoutHistoryMessageReceived";
                EventConstants.lcwOnMessageSent = "lcw:onMessageSent";
                EventConstants.lcwOnPopoutMessageSent = "lcw:onPopoutMessageSent";
                EventConstants.LcwThreadUpdate = "lcw:threadUpdate";
                EventConstants.LcwChatQueued = "lcw:chatQueued";
                EventConstants.LcwChatRetrieved = "lcw:chatRetrieved";
                EventConstants.LcwError = "lcw:error";
                EventConstants.lcwSignInCardReceived = "lcw:signInCardReceived";
                EventConstants.lcwSignInCardReceivedPopOut = "lcw:signInCardReceivedPopOut";
                EventConstants.startChat = "startChat";
                EventConstants.startPopoutChat = "startPopoutChat";
                EventConstants.startPopoutChatResponse = "startPopoutChatResponse";
                EventConstants.closePopoutChatMessage = "closePopoutChatMessage";
                EventConstants.closeChat = "closeChat";
                EventConstants.getAgentAvailability = "getAgentAvailability";
                EventConstants.startProactiveChat = "startProactiveChat";
                EventConstants.CustomEvent = "CustomEvent";
                EventConstants.LcwChangeTitle = "changeTitle";
                EventConstants.audioEnded = "ended";
                EventConstants.audioPlayError = "error";
                EventConstants.LogTelemetry = "logTelemetry";
                EventConstants.setBotAuthTokenProvider = "setBotAuthTokenProvider";
                EventConstants.setFallbackInfoProvider = "setFallbackInfoProvider";
                EventConstants.getFallbackInfoProvider = "getFallbackInfoProvider";
                return EventConstants;
            }());
            LiveChatWidget.EventConstants = EventConstants;
            var IFrameBootstrapperValues = (function () {
                function IFrameBootstrapperValues() {
                }
                IFrameBootstrapperValues.resizeMSLcwIframe = "resizeMSLcwIframe";
                IFrameBootstrapperValues.authTokenRequest = "authTokenRequest";
                IFrameBootstrapperValues.authTokenResponse = "authTokenResponse";
                IFrameBootstrapperValues.initContextParamsRequest = "initContextParamsRequest";
                IFrameBootstrapperValues.initContextParamsResponse = "initContextParamsResponse";
                IFrameBootstrapperValues.portalContactIdRequest = "portalContactIdRequest";
                IFrameBootstrapperValues.portalContactIdResponse = "portalContactIdResponse";
                IFrameBootstrapperValues.closePopoutChatMessage = "closePopoutChatMessage";
                IFrameBootstrapperValues.removeKeyboardEventHandler = "removeKeyboardEventHandler";
                IFrameBootstrapperValues.repositionMSLcwIframe = "repositionMSLcwIframe";
                IFrameBootstrapperValues.webChatPanel = "web_chat_panel";
                IFrameBootstrapperValues.ocAutofillFrame = "oc_autofill_iframe";
                IFrameBootstrapperValues.bottomLeft = "BottomLeft";
                IFrameBootstrapperValues.bottomRight = "BottomRight";
                IFrameBootstrapperValues.hideIframe = "hide_iframe";
                IFrameBootstrapperValues.proactiveChatPanel = "proactive_chat_panel";
                IFrameBootstrapperValues.startChatButton = "start_chat_button";
                IFrameBootstrapperValues.defaultClassName = [IFrameBootstrapperValues.webChatPanel, IFrameBootstrapperValues.hideIframe];
                IFrameBootstrapperValues.handleControlSlash = "handleControlSlash";
                IFrameBootstrapperValues.KEY_SLASH = 191;
                IFrameBootstrapperValues.iFrameTitle = "Microsoft Omnichannel Live Chat Widget";
                IFrameBootstrapperValues.inAppClassName = "inApp";
                IFrameBootstrapperValues.redirectPageRequest = "redirectPageRequest";
                IFrameBootstrapperValues.fallbackInfoProviderRequest = "fallbackInfoProviderRequest";
                IFrameBootstrapperValues.fallbackInfoProviderResponse = "fallbackInfoProviderResponse";
                return IFrameBootstrapperValues;
            }());
            LiveChatWidget.IFrameBootstrapperValues = IFrameBootstrapperValues;
            var BootstrapperTelemetryConstants = (function () {
                function BootstrapperTelemetryConstants() {
                }
                BootstrapperTelemetryConstants.IframeEventListenerError = "IframeEventListenerError";
                BootstrapperTelemetryConstants.AuthClientMethodException = "AuthClientMethodException";
                BootstrapperTelemetryConstants.StartChatMethodException = "StartChatMethodException";
                BootstrapperTelemetryConstants.CloseChatMethodException = "CloseChatMethodException";
                BootstrapperTelemetryConstants.StartProactiveChatMethodException = "StartProactiveChatMethodException";
                BootstrapperTelemetryConstants.SetContextProviderMethodException = "SetContextProviderMethodException";
                BootstrapperTelemetryConstants.SetAuthProviderMethodException = "SetAuthProviderMethodException";
                BootstrapperTelemetryConstants.RemoveContextProviderMethodException = "RemoveContextProviderMethodException";
                BootstrapperTelemetryConstants.RemoveAuthTokenProviderMethodException = "RemoveAuthTokenProviderMethodException";
                BootstrapperTelemetryConstants.GetAgentAvailability = "GetAgentAvailability";
                BootstrapperTelemetryConstants.SetBotAuthProviderMethodException = "SetBotAuthProviderMethodException";
                BootstrapperTelemetryConstants.SetFallbackInfoProviderMethodException = "SetFallbackInfoProviderMethodException";
                return BootstrapperTelemetryConstants;
            }());
            LiveChatWidget.BootstrapperTelemetryConstants = BootstrapperTelemetryConstants;
            var BootstrapperLogLevel;
            (function (BootstrapperLogLevel) {
                BootstrapperLogLevel["INFO"] = "INFO";
                BootstrapperLogLevel["DEBUG"] = "DEBUG";
                BootstrapperLogLevel["WARN"] = "WARN";
                BootstrapperLogLevel["ERROR"] = "ERROR";
            })(BootstrapperLogLevel = LiveChatWidget.BootstrapperLogLevel || (LiveChatWidget.BootstrapperLogLevel = {}));
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var _this = this;
            var ClientSdkDelegation = (function () {
                function ClientSdkDelegation() {
                    this.settingUpDelegation();
                }
                ClientSdkDelegation.getInstance = function () {
                    if (!ClientSdkDelegation._instance) {
                        ClientSdkDelegation._instance = new ClientSdkDelegation();
                    }
                    return ClientSdkDelegation._instance;
                };
                ClientSdkDelegation.prototype.settingUpDelegation = function () {
                    if (!LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK]) {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK] = {};
                    }
                    this.setupStartChatFunc();
                    this.setupCloseChatFunc();
                    this.setupStartProactiveChatFunc();
                    this.initGetContextProviderFunc();
                    this.setupSetContextProviderFunc();
                    this.setupRemoveContextProviderFunc();
                    this.setupGetQueueAvailabilityFunc();
                    this.setupSetAuthTokenProviderFunc();
                    this.setupSetAuthCodeProviderFunc();
                    this.initGetAuthTokenProviderFunc();
                    this.setupRemoveAuthTokenProviderFunc();
                    this.setupSetBotAuthTokenProviderFunc();
                    this.setupSetFallbackInfoProviderFunc();
                    this.setupGetFallbackInfoProviderFunc();
                };
                ClientSdkDelegation.prototype.setupStartChatFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.startChat] = function (options) {
                            ClientSdkDelegation.startChat(LiveChatWidget.EventConstants.startChat, options);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup startChat: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.StartChatMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupCloseChatFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.closeChat] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.closeChat
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup closeChat: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.CloseChatMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupGetQueueAvailabilityFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getAgentAvailability] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.getAgentAvailability
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup get Agent availability: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.GetAgentAvailability,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupStartProactiveChatFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.startProactiveChat] = function (notificationConfig, enablePreChat, options) {
                            if (enablePreChat === void 0) { enablePreChat = null; }
                            ClientSdkDelegation.startProactiveChat(LiveChatWidget.EventConstants.startProactiveChat, notificationConfig, enablePreChat, options);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup proactiveChat: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.StartProactiveChatMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.startChat = function (messageName, options) {
                    var message = {
                        messageName: messageName
                    };
                    var inNewWindow = false;
                    if (options != null) {
                        inNewWindow = options.inNewWindow;
                        message.inNewWindow = inNewWindow;
                    }
                    var shouldOpenInNewWindow = inNewWindow && inNewWindow == true;
                    if (!shouldOpenInNewWindow) {
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        return;
                    }
                    if (!LiveChatWidget.LiveChatBootstrapperWebChat.isLCWReady) {
                        return;
                    }
                    var shouldInitPopoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab] == null ||
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab] == undefined;
                    if (!shouldInitPopoutTab) {
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab].focus();
                        return;
                    }
                    var popOutTab = window.open('', LiveChatWidget.BootstrapperConstants.PopoutTarget, "location=no");
                    window[LiveChatWidget.BootstrapperConstants.PopoutTab] = popOutTab;
                    LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    window.addEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandler);
                };
                ClientSdkDelegation.startProactiveChat = function (messageName, notificationConfig, enablePreChat, options) {
                    if (enablePreChat === void 0) { enablePreChat = null; }
                    var message = {
                        messageName: messageName
                    };
                    if (notificationConfig) {
                        message.notificationConfig = notificationConfig;
                    }
                    if (enablePreChat) {
                        message.enablePreChat = enablePreChat;
                    }
                    var inNewWindow = false;
                    if (options != null) {
                        inNewWindow = options.inNewWindow;
                        message.inNewWindow = inNewWindow;
                    }
                    var shouldOpenInNewWindow = inNewWindow && inNewWindow == true;
                    if (!shouldOpenInNewWindow) {
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        return;
                    }
                    if (!LiveChatWidget.LiveChatBootstrapperWebChat.isLCWReady) {
                        return;
                    }
                    var shouldInitPopoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab] == null ||
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab] == undefined;
                    if (!shouldInitPopoutTab) {
                        window[LiveChatWidget.BootstrapperConstants.PopoutTab].focus();
                        return;
                    }
                    LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    window.addEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandlerProactiveChat);
                };
                ClientSdkDelegation.prototype.setupSetContextProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setContextProvider] = function (customerFunction) {
                            var contextVariables = customerFunction();
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setContextProvider,
                                contextVariables: contextVariables
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider] = function () { return customerFunction; };
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setContextProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetContextProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupSetAuthTokenProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setAuthTokenProvider] = function (customerFunction) {
                            customerFunction(function (token) { ClientSdkDelegation.jwtToken = token; });
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setAuthTokenProvider,
                                jwtToken: ClientSdkDelegation.jwtToken,
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getAuthTokenProvider] = function () { return customerFunction; };
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setAuthTokenProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetAuthProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupSetAuthCodeProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setAuthCodeProvider] = function (customerFunction) {
                            customerFunction(function (code) { ClientSdkDelegation.authCode = code; });
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setAuthTokenProvider,
                                jwtToken: ClientSdkDelegation.authCode,
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setAuthCodeProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetAuthProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupRemoveContextProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.removeContextProvider] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.removeContextProvider
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider] = function () { return null; };
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup removeContextProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.RemoveContextProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupRemoveAuthTokenProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.removeAuthTokenProvider] = function () {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.removeAuthTokenProvider
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            ClientSdkDelegation.getInstance().initGetAuthTokenProviderFunc();
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup removeAuthTokenProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.RemoveAuthTokenProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.initGetContextProviderFunc = function () {
                    LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider] = function () { return null; };
                };
                ClientSdkDelegation.prototype.initGetAuthTokenProviderFunc = function () {
                    LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getAuthTokenProvider] = function () { return null; };
                };
                ClientSdkDelegation.prototype.setupSetBotAuthTokenProviderFunc = function () {
                    var _this = this;
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setBotAuthTokenProvider] = function (customerFunction) {
                            window.addEventListener(LiveChatWidget.EventConstants.lcwSignInCardReceived, function (event) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var sasUrl, message;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sasUrl = event.detail.sasUrl;
                                            return [4, customerFunction(sasUrl, function (botAuthConfig) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        ClientSdkDelegation.botAuthConfig = botAuthConfig;
                                                        return [2];
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            message = {
                                                messageName: LiveChatWidget.EventConstants.setBotAuthTokenProvider,
                                                botAuthConfig: ClientSdkDelegation.botAuthConfig,
                                            };
                                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                                            return [2];
                                    }
                                });
                            }); });
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setupSetBotAuthTokenProviderFunc: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetBotAuthProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupSetFallbackInfoProviderFunc = function () {
                    try {
                        LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.setFallbackInfoProvider] = function (customerFunction) {
                            customerFunction(function (fallbackInfo) {
                                ClientSdkDelegation.fallbackInfo = fallbackInfo;
                            });
                            LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getFallbackInfoProvider] = function () { return customerFunction; };
                            var message = {
                                messageName: LiveChatWidget.EventConstants.setFallbackInfoProvider,
                                fallbackInfo: ClientSdkDelegation.fallbackInfo
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        };
                    }
                    catch (e) {
                        console.error("Failed to setup setFallbackInfoProvider: ", e);
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.SetFallbackInfoProviderMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                ClientSdkDelegation.prototype.setupGetFallbackInfoProviderFunc = function () {
                    LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getFallbackInfoProvider] = function () { return null; };
                };
                ClientSdkDelegation.popoutMessageHandler = function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var popOutTab, popoutTab, authFunc, message, contextProviderFunction, Constants_1, portalContactId;
                    return __generator(this, function (_a) {
                        if (!event.data) {
                            return [2];
                        }
                        popOutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                        if (event.data.messageName == LiveChatWidget.EventConstants.startPopoutChatResponse) {
                            popOutTab.moveTo(event.data.payload.left, event.data.payload.top);
                            popOutTab.resizeTo(event.data.payload.width, event.data.payload.height);
                            popOutTab.location.href = event.data.payload.popOutUrl;
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.EventConstants.closePopoutChatMessage) {
                            window.removeEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandler);
                            popoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            if (popoutTab && !popoutTab.closed) {
                                popoutTab.close();
                            }
                            window[LiveChatWidget.BootstrapperConstants.PopoutTab] = null;
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.authTokenRequest) {
                            authFunc = LiveChatWidget.AuthToken.getMethodFromString(event.data.functionFullName);
                            try {
                                authFunc(function (token) {
                                    popOutTab.postMessage({
                                        messageName: LiveChatWidget.IFrameBootstrapperValues.authTokenResponse,
                                        authToken: token
                                    }, '*');
                                });
                            }
                            catch (e) {
                                message = {
                                    messageName: LiveChatWidget.EventConstants.LogTelemetry,
                                    event: LiveChatWidget.BootstrapperTelemetryConstants.AuthClientMethodException,
                                    exceptionDetails: e,
                                    logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                                };
                                LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            }
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.initContextParamsRequest) {
                            contextProviderFunction = LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getContextProvider]();
                            popOutTab.postMessage({
                                messageName: LiveChatWidget.IFrameBootstrapperValues.initContextParamsResponse,
                                payload: {
                                    contextVariables: contextProviderFunction ? contextProviderFunction() : null,
                                    isProactiveChat: 0
                                }
                            }, '*');
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.portalContactIdRequest) {
                            Constants_1 = LiveChatWidget.BootstrapperConstants;
                            portalContactId = typeof window[Constants_1.Microsoft] != Constants_1.Undefined &&
                                typeof window[Constants_1.Microsoft][Constants_1.Dynamic365] != Constants_1.Undefined &&
                                typeof window[Constants_1.Microsoft][Constants_1.Dynamic365][Constants_1.Portal] != Constants_1.Undefined &&
                                typeof window[Constants_1.Microsoft][Constants_1.Dynamic365][Constants_1.Portal][Constants_1.User] != Constants_1.Undefined &&
                                (window[Constants_1.Microsoft][Constants_1.Dynamic365][Constants_1.Portal][Constants_1.User][Constants_1.ContactId]).toString();
                            popOutTab.postMessage({
                                messageName: LiveChatWidget.IFrameBootstrapperValues.portalContactIdResponse,
                                portalContactId: portalContactId
                            }, '*');
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderRequest) {
                            popOutTab.postMessage({
                                messageName: LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderResponse,
                                payload: {
                                    fallbackInfo: ClientSdkDelegation.fallbackInfo
                                }
                            }, '*');
                            return [2];
                        }
                        return [2];
                    });
                }); };
                ClientSdkDelegation.popoutMessageHandlerProactiveChat = function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var popOutTab, popoutTab;
                    return __generator(this, function (_a) {
                        if (!event.data) {
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.EventConstants.startPopoutChatResponse) {
                            popOutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            if (!popOutTab) {
                                window[LiveChatWidget.BootstrapperConstants.PopoutTab] = window.open('', LiveChatWidget.BootstrapperConstants.PopoutTarget, "location=no");
                                popOutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            }
                            popOutTab.moveTo(event.data.payload.left, event.data.payload.top);
                            popOutTab.resizeTo(event.data.payload.width, event.data.payload.height);
                            popOutTab.location.href = event.data.payload.popOutUrl;
                            return [2];
                        }
                        if (event.data.messageName == LiveChatWidget.EventConstants.closePopoutChatMessage) {
                            window.removeEventListener(LiveChatWidget.EventConstants.message, ClientSdkDelegation.popoutMessageHandler);
                            popoutTab = window[LiveChatWidget.BootstrapperConstants.PopoutTab];
                            if (popoutTab && !popoutTab.closed) {
                                popoutTab.close();
                            }
                            window[LiveChatWidget.BootstrapperConstants.PopoutTab] = null;
                            return [2];
                        }
                        return [2];
                    });
                }); };
                return ClientSdkDelegation;
            }());
            LiveChatWidget.ClientSdkDelegation = ClientSdkDelegation;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var IFrameMessageHandler = (function () {
                function IFrameMessageHandler() {
                }
                IFrameMessageHandler.addIframeEventListener = function () {
                    var _this = this;
                    window.addEventListener(LiveChatWidget.EventConstants.message, function (event) {
                        if (event.data) {
                            try {
                                var customEvent;
                                var data = event.data;
                                switch (data.messageName) {
                                    case LiveChatWidget.IFrameBootstrapperValues.resizeMSLcwIframe:
                                        LiveChatWidget.LiveChatBootstrapperWebChat.resizeMSLcwIframe(data.id, data.className);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.repositionMSLcwIframe:
                                        LiveChatWidget.LiveChatBootstrapperWebChat.repositionMSLcwIframe(data.id, data.position);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.authTokenRequest:
                                        LiveChatWidget.AuthToken.onAuthTokenRequest(data.functionFullName);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.initContextParamsRequest:
                                        IFrameMessageHandler.onInitContextParamsRequest();
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.closePopoutChatMessage:
                                        IFrameMessageHandler.onClosePopOutChatMessage();
                                    case LiveChatWidget.EventConstants.LcwChangeTitle:
                                        IFrameMessageHandler.changeDocumentTitle(data.payload);
                                        break;
                                    case LiveChatWidget.EventConstants.LcwReady:
                                        LiveChatWidget.LiveChatBootstrapperWebChat.isLCWReady = true;
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(data.messageName, data.payload);
                                        window.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.getAgentAvailabilityFinished:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(data.messageName, data.payload);
                                        window.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.LcwStartChat:
                                    case LiveChatWidget.EventConstants.LcwCloseChat:
                                    case LiveChatWidget.EventConstants.LcwThreadUpdate:
                                    case LiveChatWidget.EventConstants.lcwMinimizeChat:
                                    case LiveChatWidget.EventConstants.LcwError:
                                    case LiveChatWidget.EventConstants.lcwOnClose:
                                    case LiveChatWidget.EventConstants.lcwOnMaximize:
                                    case LiveChatWidget.EventConstants.lcwOnMessageReceived:
                                    case LiveChatWidget.EventConstants.lcwOnHistoryMessageReceived:
                                    case LiveChatWidget.EventConstants.lcwOnMessageSent:
                                    case LiveChatWidget.EventConstants.LcwChatQueued:
                                    case LiveChatWidget.EventConstants.LcwChatRetrieved:
                                    case LiveChatWidget.EventConstants.lcwSignInCardReceived:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(data.messageName, data.payload);
                                        window.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwSignInCardReceivedPopOut:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwSignInCardReceived, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.redirectPageRequest:
                                        if (!_this.doesSourceMatchOrigin(event)) {
                                            return;
                                        }
                                        var newUrl = _this.sanitizeUrl(data.newUrl);
                                        window.parent.location.replace(newUrl);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutMessageReceived:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnMessageReceived, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutHistoryMessageReceived:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnHistoryMessageReceived, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutMessageSent:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnMessageSent, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.EventConstants.lcwOnPopoutClose:
                                        customEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.lcwOnClose, data.payload);
                                        window.parent.dispatchEvent(customEvent);
                                        break;
                                    case LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderRequest:
                                        IFrameMessageHandler.onFallbackInfoRequest();
                                        break;
                                    default:
                                        break;
                                }
                            }
                            catch (e) {
                                var message = {
                                    messageName: LiveChatWidget.EventConstants.LogTelemetry,
                                    event: LiveChatWidget.BootstrapperTelemetryConstants.IframeEventListenerError,
                                    exceptionDetails: e,
                                    logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                                };
                                LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                            }
                        }
                    });
                    window.addEventListener(LiveChatWidget.EventConstants.LcwReady, function () {
                        if (window[LiveChatWidget.BootstrapperConstants.Microsoft]
                            && window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365]
                            && window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365][LiveChatWidget.BootstrapperConstants.Portal]
                            && window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365][LiveChatWidget.BootstrapperConstants.Portal][LiveChatWidget.BootstrapperConstants.User]) {
                            var message = {
                                messageName: LiveChatWidget.EventConstants.getContactInfoResponse,
                                contactInfo: window[LiveChatWidget.BootstrapperConstants.Microsoft][LiveChatWidget.BootstrapperConstants.Dynamic365][LiveChatWidget.BootstrapperConstants.Portal][LiveChatWidget.BootstrapperConstants.User]
                            };
                            LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        }
                    });
                };
                IFrameMessageHandler.onFallbackInfoRequest = function () {
                    var iframeElement = document
                        .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                    if (iframeElement) {
                        var fallbackInfo_1 = null;
                        var infoProvider = LiveChatWidget[LiveChatWidget.BootstrapperConstants.SDK][LiveChatWidget.EventConstants.getFallbackInfoProvider];
                        if (typeof infoProvider === "function") {
                            infoProvider()(function (i) { fallbackInfo_1 = i; });
                        }
                        iframeElement
                            .contentWindow
                            .postMessage({
                            messageName: LiveChatWidget.IFrameBootstrapperValues.fallbackInfoProviderResponse,
                            payload: { fallbackInfo: fallbackInfo_1 }
                        }, '*');
                    }
                };
                IFrameMessageHandler.changeDocumentTitle = function (messageCount) {
                    var currentTitle = document.title ? document.title : "";
                    var title = !!messageCount && messageCount > 0 ? "(" + messageCount + ") " + currentTitle.replace(/^\(\d*\)/, "") : currentTitle.replace(/^\(\d*\)/, "");
                    window.document.title = title;
                };
                IFrameMessageHandler.onInitContextParamsRequest = function () {
                    var iframeElement = document
                        .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                    if (iframeElement) {
                        iframeElement
                            .contentWindow
                            .postMessage({
                            messageName: LiveChatWidget.IFrameBootstrapperValues.initContextParamsResponse
                        }, '*');
                    }
                };
                IFrameMessageHandler.onClosePopOutChatMessage = function () {
                    var iframeElement = document
                        .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                    if (iframeElement) {
                        iframeElement
                            .contentWindow
                            .postMessage({
                            messageName: LiveChatWidget.IFrameBootstrapperValues.closePopoutChatMessage
                        }, '*');
                    }
                };
                IFrameMessageHandler.doesSourceMatchOrigin = function (event) {
                    var bootScript = document.querySelector(LiveChatWidget.BootstrapperConstants.ScriptSelector + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                    var source = new URL(bootScript.src).origin;
                    return event.origin === source;
                };
                IFrameMessageHandler.sanitizeUrl = function (url) {
                    var urlObject = new URL(url);
                    return urlObject.origin + urlObject.pathname;
                };
                return IFrameMessageHandler;
            }());
            LiveChatWidget.IFrameMessageHandler = IFrameMessageHandler;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var AuthToken = (function () {
                function AuthToken() {
                }
                AuthToken.onAuthTokenRequest = function (functionName) {
                    var authFunc = AuthToken.getMethodFromString(functionName);
                    try {
                        authFunc(function (token) {
                            var iframeElement = document
                                .getElementById(LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                            if (iframeElement != null && iframeElement != undefined) {
                                iframeElement
                                    .contentWindow
                                    .postMessage({
                                    messageName: LiveChatWidget.IFrameBootstrapperValues.authTokenResponse,
                                    authToken: token
                                }, '*');
                            }
                        });
                    }
                    catch (e) {
                        var message = {
                            messageName: LiveChatWidget.EventConstants.LogTelemetry,
                            event: LiveChatWidget.BootstrapperTelemetryConstants.AuthClientMethodException,
                            exceptionDetails: e,
                            logLevel: LiveChatWidget.BootstrapperLogLevel.ERROR
                        };
                        LiveChatWidget.LiveChatBootstrapperWebChat.postIframeMessage(message);
                        var errorEvent = LiveChatWidget.LiveChatBootstrapperWebChat.createCustomEvent(LiveChatWidget.EventConstants.LcwError, e);
                        window.dispatchEvent(errorEvent);
                    }
                };
                AuthToken.getMethodFromString = function (methodString) {
                    if (methodString) {
                        var scope = window;
                        var scopeSplit = methodString.split('.');
                        for (var i = 0; i < scopeSplit.length - 1; i++) {
                            scope = scope[scopeSplit[i]];
                            if (!scope) {
                                return;
                            }
                        }
                        var theMethodName = scopeSplit[scopeSplit.length - 1];
                        return scope[theMethodName];
                    }
                };
                return AuthToken;
            }());
            LiveChatWidget.AuthToken = AuthToken;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var Omnichannel;
    (function (Omnichannel) {
        var LiveChatWidget;
        (function (LiveChatWidget) {
            var LiveChatBootstrapperWebChat = (function () {
                function LiveChatBootstrapperWebChat() {
                    var _this = this;
                    this.redirectWidgetLoad = function (bootScript) { return __awaiter(_this, void 0, void 0, function () {
                        var url, orgId, path, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (bootScript.hasAttribute("v2")) {
                                        return [2, true];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    url = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgUrl);
                                    orgId = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgId);
                                    path = "" + url + LiveChatWidget.BootstrapperConstants.PathToCheckIfV2IsEnabled + orgId;
                                    return [4, window
                                            .fetch(path)
                                            .then(function (response) {
                                            return response.json();
                                        })
                                            .then(function (data) {
                                            return (data && data === true) ? true : false;
                                        })];
                                case 2: return [2, _a.sent()];
                                case 3:
                                    error_1 = _a.sent();
                                    return [2, false];
                                case 4: return [2];
                            }
                        });
                    }); };
                }
                LiveChatBootstrapperWebChat.prototype.loadJSResource = function (path, onload, onerror) {
                    var scriptResource = document.createElement(LiveChatWidget.BootstrapperConstants.Script);
                    scriptResource.src = path;
                    scriptResource.type = LiveChatWidget.BootstrapperConstants.JavascriptFlag;
                    scriptResource.onload = onload;
                    scriptResource.onerror = onerror;
                    try {
                        document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0].appendChild(scriptResource);
                    }
                    catch (_a) {
                        document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Body)[0].appendChild(scriptResource);
                    }
                };
                LiveChatBootstrapperWebChat.attachLcwIframeStyle = function (scriptNode) {
                    var styleElement = document.createElement(LiveChatWidget.BootstrapperConstants.Link);
                    styleElement[LiveChatWidget.BootstrapperConstants.ID] = LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageStyleId;
                    styleElement[LiveChatWidget.BootstrapperConstants.Type] = LiveChatWidget.BootstrapperConstants.TextCss;
                    styleElement[LiveChatWidget.BootstrapperConstants.Rel] = LiveChatWidget.BootstrapperConstants.StyleSheet;
                    var bootScript = document.querySelector("script#" + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                    var enableAutofill = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill);
                    if (!enableAutofill || enableAutofill.trim().length === 0) {
                        enableAutofill = "false";
                    }
                    var isAutofill = enableAutofill.trim().toLowerCase() === "true";
                    var framePath = isAutofill ? LiveChatWidget.BootstrapperConstants.FrameAutofillStyleCssPath : LiveChatWidget.BootstrapperConstants.FrameStyleCssPath;
                    styleElement[LiveChatWidget.BootstrapperConstants.Href] = scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.SRC).replace(LiveChatWidget.BootstrapperConstants.ScriptBootstrapperPath, framePath);
                    var htmlElement = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Html)[0];
                    var headElements = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head);
                    if (!headElements || !headElements[0]) {
                        htmlElement.appendChild(document.createElement(LiveChatWidget.BootstrapperConstants.Head));
                    }
                    var headElement = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0];
                    headElement.appendChild(styleElement);
                };
                LiveChatBootstrapperWebChat.attachLcwIframe = function (scriptNode) {
                    var iframeElement = document.createElement(LiveChatWidget.BootstrapperConstants.Iframe);
                    var servicePageSrc = scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.SRC).replace("scripts/LiveChatBootstrapper.js", "WebChatControl");
                    servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.ChatHTMLPath, LiveChatWidget.BootstrapperConstants.EndURLSeparator, LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.ID, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.ID)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataAppId, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataAppId)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataOrgId, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgId)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataOrgUrl, LiveChatWidget.BootstrapperConstants.Equal, this.convertNullToString(scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataOrgUrl)), LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.HostName, LiveChatWidget.BootstrapperConstants.Equal, window.location.host);
                    var appendReconnectId = function (urlParameterString) {
                        if (LiveChatBootstrapperWebChat.isNullOrEmptyString(urlParameterString)) {
                            return false;
                        }
                        var urlParameterObject = LiveChatBootstrapperWebChat.getQueryParameters(urlParameterString);
                        if (!urlParameterObject || LiveChatBootstrapperWebChat.isNullOrEmptyString(urlParameterObject[LiveChatWidget.BootstrapperConstants.ReconnectId])) {
                            return false;
                        }
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.ReconnectId, LiveChatWidget.BootstrapperConstants.Equal, urlParameterObject[LiveChatWidget.BootstrapperConstants.ReconnectId]);
                        return true;
                    };
                    var urlParameterStringPrimary = window.location.search.substring(1);
                    var appendPrimaryResult = appendReconnectId(urlParameterStringPrimary);
                    if (!appendPrimaryResult) {
                        try {
                            var urlParameterStringTop = window.top.location.search.substring(1);
                            appendReconnectId(urlParameterStringTop);
                        }
                        catch (_a) {
                        }
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.DisableTelemetry)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DisableTelemetry, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DisableTelemetry));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.LiveChatWidgetHideChatButton)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.LiveChatWidgetHideChatButton, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.LiveChatWidgetHideChatButton));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.OpenChatInPopOutWindow)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.OpenChatInPopOutWindow, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.OpenChatInPopOutWindow));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableNewLineMarkdownSupport)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableNewLineMarkdownSupport, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableNewLineMarkdownSupport));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableMakrdownMessageFormatting)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableMakrdownMessageFormatting, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableMakrdownMessageFormatting));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.SuggestedActionLayout)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.SuggestedActionLayout, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.SuggestedActionLayout));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.DataLcwVersion)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.DataLcwVersion, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.DataLcwVersion));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.HideMinimizeButton)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.HideMinimizeButton, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.HideMinimizeButton));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableCustomCloseButtonText)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableCustomCloseButtonText, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableCustomCloseButtonText));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableAutofill, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.BypassCache)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.BypassCache, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.BypassCache));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableDisconnectAlert)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableDisconnectAlert, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableDisconnectAlert));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.WidgetFontFamily)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.WidgetFontFamily, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.WidgetFontFamily));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice));
                        if (scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.RenderOnMobileDevice.trim().toLowerCase()) === "true") {
                            LiveChatBootstrapperWebChat.renderOnMobileDevice = true;
                        }
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.WidgetThemeColor)) {
                        var widgetColor = scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.WidgetThemeColor);
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.WidgetThemeColor, LiveChatWidget.BootstrapperConstants.Equal, encodeURIComponent(widgetColor));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.EnableSSOMagicCode)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.EnableSSOMagicCode, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.EnableSSOMagicCode));
                    }
                    if (scriptNode.hasAttribute(LiveChatWidget.BootstrapperConstants.HyperlinkTextOverride)) {
                        servicePageSrc = servicePageSrc.concat(LiveChatWidget.BootstrapperConstants.URLDelimiter, LiveChatWidget.BootstrapperConstants.HyperlinkTextOverride, LiveChatWidget.BootstrapperConstants.Equal, scriptNode.getAttribute(LiveChatWidget.BootstrapperConstants.HyperlinkTextOverride));
                    }
                    LiveChatBootstrapperWebChat.iframePosition = LiveChatWidget.IFrameBootstrapperValues.bottomRight;
                    iframeElement[LiveChatWidget.BootstrapperConstants.SRC] = "https://livechatdemo123.herokuapp.com/devAdam.html";
                    iframeElement[LiveChatWidget.BootstrapperConstants.ID] = LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId;
                    (_b = iframeElement.classList).add.apply(_b, LiveChatWidget.IFrameBootstrapperValues.defaultClassName);
                    iframeElement[LiveChatWidget.BootstrapperConstants.Title] = "Live Chat Widget";
                    iframeElement[LiveChatWidget.StyleConstants.BackgroundColor] = LiveChatWidget.DefaultCssValues.IFrameBackgroundColor;
                    iframeElement[LiveChatWidget.StyleConstants.FrameBorder] = LiveChatWidget.DefaultCssValues.FrameBorderWidth;
                    iframeElement[LiveChatWidget.StyleConstants.AllowTransparency] = true;
                    iframeElement[LiveChatWidget.BootstrapperConstants.ALLOW] = LiveChatWidget.BootstrapperConstants.AllowValues;
                    iframeElement.allowFullscreen = true;
                    iframeElement.setAttribute(LiveChatWidget.BootstrapperConstants.AllowFullScreen, "true");
                    iframeElement.setAttribute(LiveChatWidget.BootstrapperConstants.MozillaAllowFullScreen, "true");
                    iframeElement.setAttribute(LiveChatWidget.BootstrapperConstants.WebKitAllowFullScreen, "true");
                    iframeElement.style[LiveChatWidget.StyleConstants.Position] = LiveChatWidget.DefaultCssValues.IFramePosition;
                    iframeElement.style[LiveChatWidget.StyleConstants.BorderWidth] = LiveChatWidget.DefaultCssValues.FrameBorderWidth;
                    iframeElement.style[LiveChatWidget.StyleConstants.ZIndex] = LiveChatWidget.DefaultCssValues.IFrameZIndex;
                    try {
                        var pageBody = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Body)[0];
                        pageBody.appendChild(iframeElement);
                    }
                    catch (e) {
                        window.onload = function () {
                            document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Body)[0].appendChild(iframeElement);
                        };
                    }
                    LiveChatWidget.IFrameMessageHandler.addIframeEventListener();
                    var _b;
                };
                LiveChatBootstrapperWebChat.convertNullToString = function (str) {
                    return this.isNullOrUndefined(str) ? "" : str;
                };
                LiveChatBootstrapperWebChat.resizeMSLcwIframe = function (id, className) {
                    var msLcwIframe = document.getElementById(id);
                    if (!msLcwIframe)
                        return;
                    var classes = [];
                    for (var i = 0; i < msLcwIframe.classList.length; i++) {
                        classes.push(msLcwIframe.classList[i]);
                    }
                    for (var i = 0; i < classes.length; i++) {
                        msLcwIframe.classList.remove(classes[i]);
                    }
                    if (className) {
                        var classArr = className.split(" ");
                        classArr.forEach(function (element) {
                            msLcwIframe.classList.add(element);
                        });
                    }
                    if (LiveChatBootstrapperWebChat.iframePosition !== null) {
                        msLcwIframe.classList.add(LiveChatBootstrapperWebChat.iframePosition.toString());
                    }
                    var bootScript = document.querySelector("script#" + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                    var enableAutofill = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.EnableAutofill);
                    if (!enableAutofill || enableAutofill.trim().length === 0) {
                        enableAutofill = "false";
                    }
                    var isAutofill = enableAutofill.trim().toLowerCase() === "true";
                    if (isAutofill) {
                        msLcwIframe.classList.add(Microsoft.Omnichannel.LiveChatWidget.IFrameBootstrapperValues.ocAutofillFrame);
                    }
                    if (LiveChatBootstrapperWebChat.renderOnMobileDevice) {
                        msLcwIframe.classList.add(LiveChatWidget.IFrameBootstrapperValues.inAppClassName);
                    }
                };
                LiveChatBootstrapperWebChat.repositionMSLcwIframe = function (id, position) {
                    var msLcwIframe = document.getElementById(id);
                    if (!msLcwIframe || !msLcwIframe.classList
                        || position === LiveChatBootstrapperWebChat.iframePosition) {
                        return;
                    }
                    for (var i = 0; i < msLcwIframe.classList.length; i++) {
                        if (msLcwIframe.classList[i] === LiveChatWidget.IFrameBootstrapperValues.bottomLeft || msLcwIframe.classList[i] === LiveChatWidget.IFrameBootstrapperValues.bottomRight) {
                            msLcwIframe.classList.remove(msLcwIframe.classList[i]);
                        }
                    }
                    LiveChatBootstrapperWebChat.iframePosition = position;
                    msLcwIframe.classList.add(position);
                };
                LiveChatBootstrapperWebChat.createCustomEvent = function (eventName, payload) {
                    var eventDetails = (payload) ? {
                        detail: payload
                    } : undefined;
                    var event = null;
                    try {
                        event = new CustomEvent(eventName, eventDetails);
                    }
                    catch (e) {
                        event = document.createEvent(LiveChatWidget.EventConstants.CustomEvent);
                        event.initCustomEvent(eventName, true, true, eventDetails);
                    }
                    return event;
                };
                LiveChatBootstrapperWebChat.prototype.initializeLiveChat = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var bootScript, isV2Enabled, liveChatScriptRoot, target_window, existingIframeElement, self_1, liveChatScriptRoot_1, liveChatInitializerFileNameWithExtension_1, libRoot, liveChatAllLibsPath, libsResourceOnload;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    bootScript = document.querySelector(LiveChatWidget.BootstrapperConstants.ScriptSelector + LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidget);
                                    return [4, this.redirectWidgetLoad(bootScript)];
                                case 1:
                                    isV2Enabled = _a.sent();
                                    if (isV2Enabled === true) {
                                        liveChatScriptRoot = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.SRC);
                                        this.loadJSResource(liveChatScriptRoot.replace(LiveChatWidget.BootstrapperConstants.Scripts, LiveChatWidget.BootstrapperConstants.CustomizationVersionScripts), null, null);
                                        return [2];
                                    }
                                    target_window = window[Microsoft.Omnichannel.LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId];
                                    existingIframeElement = document.getElementById(Microsoft.Omnichannel.LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId);
                                    LiveChatBootstrapperWebChat.appendViewportMeta();
                                    LiveChatBootstrapperWebChat.appendPhoneMeta();
                                    LiveChatBootstrapperWebChat.addKeyboardEventHandler();
                                    if (LiveChatBootstrapperWebChat.shouldRenderChatWidget(target_window, existingIframeElement)) {
                                        if (!window[LiveChatWidget.BootstrapperConstants.InitializerScriptDownloadTriggeredFlag]) {
                                            window[LiveChatWidget.BootstrapperConstants.InitializerScriptDownloadTriggeredFlag] = true;
                                            self_1 = this;
                                            liveChatScriptRoot_1 = bootScript.getAttribute(LiveChatWidget.BootstrapperConstants.SRC);
                                            if (liveChatScriptRoot_1.indexOf(LiveChatWidget.BootstrapperConstants.WebChatVersionScripts) === -1) {
                                                liveChatScriptRoot_1 = liveChatScriptRoot_1.replace(LiveChatWidget.BootstrapperConstants.Scripts, LiveChatWidget.BootstrapperConstants.WebChatVersionScripts);
                                            }
                                            liveChatScriptRoot_1 = liveChatScriptRoot_1.substring(0, liveChatScriptRoot_1.lastIndexOf("/") + 1);
                                            liveChatInitializerFileNameWithExtension_1 = LiveChatWidget.BootstrapperConstants.InitializerScriptPath;
                                            libRoot = liveChatScriptRoot_1.trim().replace(LiveChatWidget.BootstrapperConstants.Scripts, LiveChatWidget.BootstrapperConstants.Lib);
                                            liveChatAllLibsPath = libRoot.trim() + LiveChatWidget.BootstrapperConstants.LibsScriptPath;
                                            libsResourceOnload = function () {
                                                var liveChatInitializerPath = liveChatScriptRoot_1.trim() + liveChatInitializerFileNameWithExtension_1;
                                                self_1.loadJSResource(liveChatInitializerPath, null, null);
                                            };
                                            this.loadJSResource(liveChatAllLibsPath, libsResourceOnload, null);
                                        }
                                    }
                                    else if (LiveChatBootstrapperWebChat.shouldAddIframe(target_window, existingIframeElement)) {
                                        LiveChatBootstrapperWebChat.attachLcwIframeStyle(bootScript);
                                        LiveChatBootstrapperWebChat.attachLcwIframe(bootScript);
                                        LiveChatWidget.ClientSdkDelegation.getInstance().settingUpDelegation();
                                    }
                                    return [2];
                            }
                        });
                    });
                };
                LiveChatBootstrapperWebChat.appendViewportMeta = function () {
                    var metas = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Meta);
                    for (var i = 0; i < metas.length; i++) {
                        if (metas[i].name === LiveChatWidget.BootstrapperConstants.Viewport) {
                            return;
                        }
                    }
                    var viewportMeta = document.createElement(LiveChatWidget.BootstrapperConstants.Meta);
                    viewportMeta.name = LiveChatWidget.BootstrapperConstants.Viewport;
                    viewportMeta.content = LiveChatWidget.BootstrapperConstants.ViewportMetaContent;
                    document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0].appendChild(viewportMeta);
                };
                LiveChatBootstrapperWebChat.appendPhoneMeta = function () {
                    var metas = document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Meta);
                    for (var i = 0; i < metas.length; i++) {
                        if (metas[i].name === LiveChatWidget.BootstrapperConstants.FormatDetection) {
                            return;
                        }
                    }
                    var phoneMeta = document.createElement(LiveChatWidget.BootstrapperConstants.Meta);
                    phoneMeta.name = LiveChatWidget.BootstrapperConstants.FormatDetection;
                    phoneMeta.content = LiveChatWidget.BootstrapperConstants.FormatDetectionMetaContent;
                    document.getElementsByTagName(LiveChatWidget.BootstrapperConstants.Head)[0].appendChild(phoneMeta);
                };
                LiveChatBootstrapperWebChat.addKeyboardEventHandler = function () {
                    window.addEventListener(LiveChatWidget.EventConstants.keydown, this.handleKeydown);
                };
                LiveChatBootstrapperWebChat.handleKeydown = function (e) {
                    if (e.ctrlKey && e.keyCode === LiveChatWidget.IFrameBootstrapperValues.KEY_SLASH) {
                        var message = {
                            messageName: LiveChatWidget.IFrameBootstrapperValues.handleControlSlash
                        };
                        LiveChatBootstrapperWebChat.postIframeMessage(message);
                    }
                };
                LiveChatBootstrapperWebChat.postIframeMessage = function (message) {
                    var iframes = document.querySelectorAll(LiveChatWidget.BootstrapperConstants.Iframe);
                    for (var i = 0; i < iframes.length; i++) {
                        if (iframes[i].id === LiveChatWidget.BootstrapperConstants.MicrosoftOmnichannelLCWidgetChatIframePageId) {
                            iframes[i].contentWindow.postMessage(message, "*");
                        }
                    }
                };
                LiveChatBootstrapperWebChat.isNullOrEmptyString = function (s) {
                    return LiveChatBootstrapperWebChat.isNullOrUndefined(s) || s === "";
                };
                LiveChatBootstrapperWebChat.isNullOrUndefined = function (obj) {
                    return (obj === null || obj === undefined);
                };
                LiveChatBootstrapperWebChat.getQueryParameters = function (urlParameterStrings) {
                    var queryParams = {};
                    if (!LiveChatBootstrapperWebChat.isNullOrEmptyString(urlParameterStrings)) {
                        var urlParams = urlParameterStrings.split("?");
                        if (urlParams.length > 1) {
                            urlParameterStrings = urlParams[1];
                        }
                        var urlParameters = urlParameterStrings.split("&");
                        if (urlParameters.length > 0) {
                            urlParameters.forEach(function (urlParameter) {
                                var pair = urlParameter.split("=");
                                if (pair.length === 2) {
                                    queryParams[pair[0]] = pair[1];
                                }
                            });
                        }
                    }
                    return queryParams;
                };
                LiveChatBootstrapperWebChat.renderOnMobileDevice = false;
                LiveChatBootstrapperWebChat.isLCWReady = false;
                LiveChatBootstrapperWebChat.shouldRenderChatWidget = function (target_window, existingIframeElement) {
                    return target_window && !existingIframeElement;
                };
                LiveChatBootstrapperWebChat.shouldAddIframe = function (target_window, existingIframeElement) {
                    return !target_window && !existingIframeElement;
                };
                return LiveChatBootstrapperWebChat;
            }());
            LiveChatWidget.LiveChatBootstrapperWebChat = LiveChatBootstrapperWebChat;
        })(LiveChatWidget = Omnichannel.LiveChatWidget || (Omnichannel.LiveChatWidget = {}));
    })(Omnichannel = Microsoft.Omnichannel || (Microsoft.Omnichannel = {}));
})(Microsoft || (Microsoft = {}));
(function (funcName, baseObj) {
    new Microsoft.Omnichannel.LiveChatWidget.LiveChatBootstrapperWebChat().initializeLiveChat();
})("docReady", window);

// SIG // Begin signature block
// SIG // MIIrWgYJKoZIhvcNAQcCoIIrSzCCK0cCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // HA7202ET+DRqurOc2M5Uo1W5Va/HrwLd7JWR07gQaNWg
// SIG // ghF9MIIIjTCCB3WgAwIBAgITNgAAAao8Ht6c0vSWRgAC
// SIG // AAABqjANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjIwNjEwMTgy
// SIG // NzA0WhcNMjMwNjEwMTgyNzA0WjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4POLHWr+OrgM
// SIG // JrmqRgOCICRvvA9AUci2LDJNSlbLJWZRyEsSvAA6Mt4Y
// SIG // RDRQ2AFXPBwiGgzOw9oLItnIb9fiAnQEUpMvwWz+a8fR
// SIG // 0Vk3Lb6WBwopJYFetX2IXhsmdOvbkD9Y1fkMz48qP5Cc
// SIG // wbjZoZ7T0fprhZJZhZn6AJxpry9E4VUTDcfEkRBVQhMc
// SIG // 9GKVskOvb7Hd8cRJFFlbWuij3QFv1VWSC+4ikdZGWW7u
// SIG // zIrdfA3mQJNEUzBntarluuFE2rPW7JnrUhziseBnYi+5
// SIG // wtegDANY/LvSB+DdlDjjPAIvyOysIi7CmJEVX/rTSGbb
// SIG // R1bm+dNGw+FOmXWMWZShaQIDAQABo4IFmTCCBZUwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUu6MTpSoWjTb3bUjP
// SIG // trSdxbO0f8kwDgYDVR0PAQH/BAQDAgeAMFQGA1UdEQRN
// SIG // MEukSTBHMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFu
// SIG // ZCBPcGVyYXRpb25zIExpbWl0ZWQxFjAUBgNVBAUTDTIz
// SIG // NjE2Nys0NzA4NjIwggHmBgNVHR8EggHdMIIB2TCCAdWg
// SIG // ggHRoIIBzYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraWluZnJhL0NSTC9BTUUlMjBDUyUyMENBJTIwMDEo
// SIG // MikuY3JshjFodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMi5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMy5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsNC5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshoG9bGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEoMiksQ049QlkyUEtJQ1NDQTAxLENO
// SIG // PUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxD
// SIG // Tj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPUFN
// SIG // RSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlz
// SIG // dD9iYXNlP29iamVjdENsYXNzPWNSTERpc3RyaWJ1dGlv
// SIG // blBvaW50MB8GA1UdIwQYMBaAFJZRhOBrb3v+2Aarw/KF
// SIG // 5imuavnUMB8GA1UdJQQYMBYGCisGAQQBgjdbAQEGCCsG
// SIG // AQUFBwMDMA0GCSqGSIb3DQEBCwUAA4IBAQDG/z1OVDfp
// SIG // kGewuUqCAOq+Inx51opQcBn3tPr9oMA5NzNpcRNB5Acd
// SIG // uYUv+gh4IIhYvZxUnqnGIiOq52LBYn5E/NT8VEReusI0
// SIG // Y42lKOpuz6nDkHMghGuSiMJAx3OKrrzoG/+qB50qLFSG
// SIG // 5avvMD7I5+raNxEqsyUeAbHGPtuQOPAJVrj1sP9CXhD0
// SIG // Dgjky87/J6/1gERjiXG5ZzY1wLVJDYD0pwrlVbKBYJXX
// SIG // uuH55t++P0xhJZLirKw8Q51m1ffvyxzKcK56l633S/JP
// SIG // f+nVmeTLQnp+yy0UgEB0lbxTv/YR0RNVVIzRQ/WUR1EY
// SIG // INoFJlbCEyMz8hxqwKZ0A3FhMIII6DCCBtCgAwIBAgIT
// SIG // HwAAAFHqj/accwyoOwAAAAAAUTANBgkqhkiG9w0BAQsF
// SIG // ADA8MRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRAwDgYDVQQDEwdhbWVyb290MB4X
// SIG // DTIxMDUyMTE4NDQxNFoXDTI2MDUyMTE4NTQxNFowQTET
// SIG // MBEGCgmSJomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixk
// SIG // ARkWA0FNRTEVMBMGA1UEAxMMQU1FIENTIENBIDAxMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyZpS
// SIG // CX0Bno1W1yqXMhT6BUlJZWpa4p3xFeiTHO4vm2Q6C/az
// SIG // R5xwxnyYHrkSGDtS2P9X+KDE64V20mmEQkubxnPNeOVn
// SIG // E2RvdPGxgwlq+BhS3ONdVsQPj79q7XgHM9HhzB9+qk0P
// SIG // C9KN1zm9p/seyiRS6JF1dbOqRf1pUl7FAVxmgiCFgV8h
// SIG // HIb/rDPXig7FDi3S0yEx2CUDVpIq8jEhG8anUFE1WYxM
// SIG // +ni0S5KHwwKPKV4qyGDoDO+9AmDoma3Chyu5WDlW5cdt
// SIG // qXTWsGPE3umtnX6AmlldUFLms4OVR4guKf+n5LIBCC6b
// SIG // TiocfXPomqYjYTKx7AGMfaVLaaXmhQIDAQABo4IE3DCC
// SIG // BNgwEgYJKwYBBAGCNxUBBAUCAwIAAjAjBgkrBgEEAYI3
// SIG // FQIEFgQUEmgkQiFHy9RrvjHPIKTACyN/P0cwHQYDVR0O
// SIG // BBYEFJZRhOBrb3v+2Aarw/KF5imuavnUMIIBBAYDVR0l
// SIG // BIH8MIH5BgcrBgEFAgMFBggrBgEFBQcDAQYIKwYBBQUH
// SIG // AwIGCisGAQQBgjcUAgEGCSsGAQQBgjcVBgYKKwYBBAGC
// SIG // NwoDDAYJKwYBBAGCNxUGBggrBgEFBQcDCQYIKwYBBQUI
// SIG // AgIGCisGAQQBgjdAAQEGCysGAQQBgjcKAwQBBgorBgEE
// SIG // AYI3CgMEBgkrBgEEAYI3FQUGCisGAQQBgjcUAgIGCisG
// SIG // AQQBgjcUAgMGCCsGAQUFBwMDBgorBgEEAYI3WwEBBgor
// SIG // BgEEAYI3WwIBBgorBgEEAYI3WwMBBgorBgEEAYI3WwUB
// SIG // BgorBgEEAYI3WwQBBgorBgEEAYI3WwQCMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAS
// SIG // BgNVHRMBAf8ECDAGAQH/AgEAMB8GA1UdIwQYMBaAFCle
// SIG // UV5krjS566ycDaeMdQHRCQsoMIIBaAYDVR0fBIIBXzCC
// SIG // AVswggFXoIIBU6CCAU+GMWh0dHA6Ly9jcmwubWljcm9z
// SIG // b2Z0LmNvbS9wa2lpbmZyYS9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwyLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMy5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIYjaHR0cDovL2NybDEuYW1lLmdibC9jcmwv
// SIG // YW1lcm9vdC5jcmyGgapsZGFwOi8vL0NOPWFtZXJvb3Qs
// SIG // Q049QU1FUm9vdCxDTj1DRFAsQ049UHVibGljJTIwS2V5
// SIG // JTIwU2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmln
// SIG // dXJhdGlvbixEQz1BTUUsREM9R0JMP2NlcnRpZmljYXRl
// SIG // UmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // UkxEaXN0cmlidXRpb25Qb2ludDCCAasGCCsGAQUFBwEB
// SIG // BIIBnTCCAZkwRwYIKwYBBQUHMAKGO2h0dHA6Ly9jcmwu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lpbmZyYS9jZXJ0cy9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMi5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMy5h
// SIG // bWUuZ2JsL2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcG
// SIG // CCsGAQUFBzAChitodHRwOi8vY3JsMS5hbWUuZ2JsL2Fp
// SIG // YS9BTUVSb290X2FtZXJvb3QuY3J0MIGiBggrBgEFBQcw
// SIG // AoaBlWxkYXA6Ly8vQ049YW1lcm9vdCxDTj1BSUEsQ049
// SIG // UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049U2Vydmlj
// SIG // ZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUsREM9R0JM
// SIG // P2NBQ2VydGlmaWNhdGU/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // ZXJ0aWZpY2F0aW9uQXV0aG9yaXR5MA0GCSqGSIb3DQEB
// SIG // CwUAA4ICAQBQECO3Tw/o317Rrd7yadqcswPx1LvIYymk
// SIG // aTN6KcmuRt6HKa0Xe73Ux2/AQ30TfgA9GBJngweRykKB
// SIG // usRzyOU17iIubJvy3gA21dwtqtB0DsoEv1U/ptVu2v++
// SIG // doTCJ/i+GbssVXkgaX8H+6EOGEmT4evp4GbwR4HwWlc+
// SIG // Dvf8HH8PdUA2Z04CvcwIfckSipbNm84jxJ8XjmTFTWsc
// SIG // ldL9edj2NsY6iGnyJFIyur2PS7VRYyV3p1VAJp91gj1j
// SIG // RQtWEyCB8P5g9nE3z8u0ANaU/hjwEQCrdGyravWgnf2J
// SIG // tG+bT26YAokbc8m+32zUtXRO+NK3tAjhOu2FdsG3qNrF
// SIG // 4sc7y37R/C+7Pcb/cFfhttqsirepZii4xStcjMODYuXz
// SIG // Gm3IJs0b0owHG6oKd7ZOGvHpmmh9K8/DLriD/sq8bURD
// SIG // 10qi/wuW8zM7IpLg1vcR9dIK2mc0pj44pc6UX0XbttP/
// SIG // VEJgu3lT2eI9VjWtaKjx38xE9woSMyekPRtzTwgfuysF
// SIG // 9DkJisr+yA4po/FPxpbBw9c/hBf32DH/GFxteS2pmjgK
// SIG // IbMP8sDukmEq3lVvuWNJsybrZwQvQpvaM49fv+JKpLK5
// SIG // YWYEfwksYRR9wU8Hh/ID9hRCEkbUoQ2W7mMpsp2Nbp/k
// SIG // cn4ivfolUy3Q9Yf0scsQ6WTLYpm+AoCUJTGCGTUwghkx
// SIG // AgEBMFgwQTETMBEGCgmSJomT8ixkARkWA0dCTDETMBEG
// SIG // CgmSJomT8ixkARkWA0FNRTEVMBMGA1UEAxMMQU1FIENT
// SIG // IENBIDAxAhM2AAABqjwe3pzS9JZGAAIAAAGqMA0GCWCG
// SIG // SAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMC8GCSqGSIb3DQEJBDEiBCC9JOSJTxvEU8rMvAAY
// SIG // Abp+mChb4RDpX/svzl0VZK4n6jBCBgorBgEEAYI3AgEM
// SIG // MTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAAnkj0ntvkyW9+x9g+uNC98vQnBSUbxi9yCG
// SIG // RvoCsHJU/v4uhqK41iXB3PFx4BEPrwPw6f0XKKLeF4Fv
// SIG // VEwVorvq8sLKxIr+2V7/SQ08ek+Ca+4FE5gUlAMQg2tq
// SIG // eNiGKCXU1z7DZgF0h4SG096xA8X8dKbBRee5Q36Ab3YS
// SIG // 3vUwxsmQKrSGBXcyU1l4u9EuWdMynSxrk7DiFurxCifK
// SIG // MjFwfRIDG2sd6bgqibzXHUoz0pU0BP95235hWFqyY630
// SIG // 8x0gl5emIQBZaDcznLht3xtrdpytmHoKgY2wXBjK2Mom
// SIG // mjTb/RolcpZHyQvNwrzxnBthaBUeb7ZUSaPaoMDxE+uh
// SIG // ghb9MIIW+QYKKwYBBAGCNwMDATGCFukwghblBgkqhkiG
// SIG // 9w0BBwKgghbWMIIW0gIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBUQYLKoZIhvcNAQkQAQSgggFABIIBPDCCATgCAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgwjPq
// SIG // yjpIisG7/qyrl22X0zqP8JH5zyZc7qxrqQJ9H/0CBmQ3
// SIG // 6WXSFRgTMjAyMzA0MjgyMDMyMjUuNjM1WjAEgAIB9KCB
// SIG // 0KSBzTCByjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjElMCMGA1UE
// SIG // CxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0aW9uczEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046MTJCQy1FM0FF
// SIG // LTc0RUIxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFNlcnZpY2WgghFUMIIHDDCCBPSgAwIBAgITMwAA
// SIG // AcpPwrPtAw0YbAABAAAByjANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0yMjEx
// SIG // MDQxOTAxNDBaFw0yNDAyMDIxOTAxNDBaMIHKMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSUwIwYDVQQLExxNaWNyb3NvZnQg
// SIG // QW1lcmljYSBPcGVyYXRpb25zMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjoxMkJDLUUzQUUtNzRFQjElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCC
// SIG // AiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAMMB
// SIG // nKvY+dK1hJHC0pRmS8HlFX8V0WlI4j7MmjVcT3TEbNwl
// SIG // XufLIrvxJGlbe7ezzUz5KP7PJTbbrAHixJ85IuOMsZNn
// SIG // PXpJvBNUkNmFfW/PyzsXymqWfLVZT8scOg5hczRUI4n1
// SIG // ZvBIme5RUaGOOPL6XGwQ9fKo2DRf9md0kHIXLHVdTfWO
// SIG // ldlhpeeVZi6hUV+fnabXY63gV84t1lvU7KAhFnGAgSuc
// SIG // GIEvbU9kkkk82nt45ncONIPiziMq1Txdg6M5Erb+iQQz
// SIG // 78GoV1qShqTu6x6yhfqOxAjf1YkBTGcqf78Xj4lAAQza
// SIG // sxFCPLO5JWJnh1743kDqvwjNwv2PG493yTm52R+3gF70
// SIG // Q58U/Eelv7g9ZhlCb7/TPQTLt54SqSpksc8zuS7XDBId
// SIG // rTF8YTBhjTFD9wzhCt1/tvyw9WdN7rCU5OaRzaB/4AyL
// SIG // 26e/OwsONLbAKYgL7ax2MLm9E6iL/GcutpfJ/LPzL/z+
// SIG // +uAk6q8XF82pQR4fl8uFz45mnZz5GScnKdynM25IPUG7
// SIG // yadB/9BbMB0vnnxaH6QzScC4dYbP2jItSv6MxL+/1iyD
// SIG // 7A4Cten1P2scm6jCpNDTsYHpVIwGCpeMFNGOkOKvTf/T
// SIG // 8AEtHLIn0IWNaKEHwCNIgwgkhAE7JQ/G0ztLUbanXCHW
// SIG // rzkXqs6D3bwL9w69V10PAgMBAAGjggE2MIIBMjAdBgNV
// SIG // HQ4EFgQU+sf+pUuBEkPCmYXdEYFO0WFzPH8wHwYDVR0j
// SIG // BBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIwXwYDVR0f
// SIG // BFgwVjBUoFKgUIZOaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraW9wcy9jcmwvTWljcm9zb2Z0JTIwVGltZS1T
// SIG // dGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwGCCsGAQUF
// SIG // BwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNyb3Nv
// SIG // ZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAxMCgxKS5j
// SIG // cnQwDAYDVR0TAQH/BAIwADATBgNVHSUEDDAKBggrBgEF
// SIG // BQcDCDANBgkqhkiG9w0BAQsFAAOCAgEA2NB5Kgktyrin
// SIG // nxV/P65v3bQ/dOunShJXjaq4sGarDOGJvBMOEIqjqju5
// SIG // lqGGGOCucvHl0jhyjVzn6TukW2mI/IwjnCQAebai5eYY
// SIG // jIGjGwFS65dYZYsfbJaDuOSzjdCaYSr2tw+gFSgOz+/J
// SIG // gPYkR2WFFa0Ysn70I1sZlJ8YYrPH6Jvdvv0R3BGdQ4ef
// SIG // qeIM3ni/OGJdNFsqvRHIASin4KtJQo1jUqtQFBtbBC5Y
// SIG // FzkrymeP5V1x/jH4XB3vdViyGmZEvx7vcHU0+iNeAQve
// SIG // 8oQ7GVlwJdCCfNNSOlLRBaQrE3jsmQSewhdK3+ZcSfLR
// SIG // PaIzbMqlySrsFZ9HsAjJGas/3BML/RRMfEJrGdGTaHU7
// SIG // bJflfXWZvnlKzCmZOjyrCgK7UPox5H1bB4Cjg5aHpaTp
// SIG // h6oF+1GztDVZyJaT+eYEE6le+r1O8EV6VH8+yoRNwWVz
// SIG // YMBtOXUZwlw8K4YWM/iLW87NStUfCOGDAyY1vdAEgoPS
// SIG // X/scoESmRih46NgbNl8mirjdT+hRQiFVzeyoB5f22Ymp
// SIG // Bqu5OU0ODlyucZIQh4Y3YB7sY94SuQGjsvhl8Tv428qh
// SIG // kanksX/k0z7loQ1rqyKN90TAxnuQ2yJo3G3I+nVYUHr6
// SIG // hwpUdTh0n6/vJtYVkSRpQtWrXDlimowK8DlEaiUlZU4c
// SIG // FYCMsxjZo84wggdxMIIFWaADAgECAhMzAAAAFcXna54C
// SIG // m0mZAAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGIMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMTIwMAYDVQQDEylNaWNyb3NvZnQg
// SIG // Um9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxMDAe
// SIG // Fw0yMTA5MzAxODIyMjVaFw0zMDA5MzAxODMyMjVaMHwx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMIICIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGmTOe0ciEL
// SIG // eaLL1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YBf2xK4OK9
// SIG // uT4XYDP/XE/HZveVU3Fa4n5KWv64NmeFRiMMtY0Tz3cy
// SIG // wBAY6GB9alKDRLemjkZrBxTzxXb1hlDcwUTIcVxRMTeg
// SIG // Cjhuje3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+NSZk2pg7
// SIG // uhp7M62AW36MEBydUv626GIl3GoPz130/o5Tz9bshVZN
// SIG // 7928jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi947SHJMPg
// SIG // yY9+tVSP3PoFVZhtaDuaRr3tpK56KTesy+uDRedGbsoy
// SIG // 1cCGMFxPLOJiss254o2I5JasAUq7vnGpF1tnYN74kpEe
// SIG // HT39IM9zfUGaRnXNxF803RKJ1v2lIH1+/NmeRd+2ci/b
// SIG // fV+AutuqfjbsNkz2K26oElHovwUDo9Fzpk03dJQcNIIP
// SIG // 8BDyt0cY7afomXw/TNuvXsLz1dhzPUNOwTM5TI4CvEJo
// SIG // LhDqhFFG4tG9ahhaYQFzymeiXtcodgLiMxhy16cg8ML6
// SIG // EgrXY28MyTZki1ugpoMhXV8wdJGUlNi5UPkLiWHzNgY1
// SIG // GIRH29wb0f2y1BzFa/ZcUlFdEtsluq9QBXpsxREdcu+N
// SIG // +VLEhReTwDwV2xo3xwgVGD94q0W29R6HXtqPnhZyacau
// SIG // e7e3PmriLq0CAwEAAaOCAd0wggHZMBIGCSsGAQQBgjcV
// SIG // AQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqnUv5kxJq+
// SIG // gpE8RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVdAF5iXYP0
// SIG // 5dJlpxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsGAQQBgjdM
// SIG // g30BATBBMD8GCCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL0RvY3MvUmVwb3NpdG9y
// SIG // eS5odG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgwGQYJKwYB
// SIG // BAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGG
// SIG // MA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAU1fZW
// SIG // y4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8wTTBLoEmg
// SIG // R4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9j
// SIG // cmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYt
// SIG // MjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggrBgEFBQcw
// SIG // AoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9j
// SIG // ZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcnQw
// SIG // DQYJKoZIhvcNAQELBQADggIBAJ1VffwqreEsH2cBMSRb
// SIG // 4Z5yS/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfCcTY/2mRs
// SIG // fNB1OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2YurYeeNg2
// SIG // LpypglYAA7AFvonoaeC6Ce5732pvvinLbtg/SHUB2Rje
// SIG // bYIM9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRWqveVtihV
// SIG // J9AkvUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wXsFSFQrP8
// SIG // DJ6LGYnn8AtqgcKBGUIZUnWKNsIdw2FzLixre24/LAl4
// SIG // FOmRsqlb30mjdAy87JGA0j3mSj5mO0+7hvoyGtmW9I/2
// SIG // kQH2zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8x1RtnWN0
// SIG // SCyxTkctwRQEcb9k+SS+c23Kjgm9swFXSVRk2XPXfx5b
// SIG // RAGOWhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pFEUep8beu
// SIG // yOiJXk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq77EFmPWn9
// SIG // y8FBSX5+k77L+DvktxW/tM4+pTFRhLy/AsGConsXHRWJ
// SIG // jXD+57XQKBqJC4822rpM+Zv/Cuk0+CQ1ZyvgDbjmjJnW
// SIG // 4SLq8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7vzhwRNGQ
// SIG // 8cirOoo6CGJ/2XBjU02N7oJtpQUQwXEGahC0HVUzWLOh
// SIG // cGbyoYICyzCCAjQCAQEwgfihgdCkgc0wgcoxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jvc29mdCBB
// SIG // bWVyaWNhIE9wZXJhdGlvbnMxJjAkBgNVBAsTHVRoYWxl
// SIG // cyBUU1MgRVNOOjEyQkMtRTNBRS03NEVCMSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloiMK
// SIG // AQEwBwYFKw4DAhoDFQCjjueXDE+LMjz+pwpYNiFn2ozK
// SIG // pKCBgzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwMA0GCSqGSIb3DQEBBQUAAgUA5/YtpjAiGA8yMDIz
// SIG // MDQyODE5MzM1OFoYDzIwMjMwNDI5MTkzMzU4WjB0MDoG
// SIG // CisGAQQBhFkKBAExLDAqMAoCBQDn9i2mAgEAMAcCAQAC
// SIG // AiSQMAcCAQACAhHPMAoCBQDn938mAgEAMDYGCisGAQQB
// SIG // hFkKBAIxKDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMH
// SIG // oSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEA
// SIG // ySZ21a84xHr8Baw6pmQInrIhtRXKqCSmdRjwGeejSk5q
// SIG // cxKdDuTV8QE1aLnRNqVbVWyYLQ8+A7SVOv5Hrz2aDRDE
// SIG // iNnJcP4J2yYWks7XyTtiALQ4KVfvQJqn89f8xKRnIonS
// SIG // Esq+KFgjjL2ZNfgh4YaFqO+tt2jnwreCpLREwZcxggQN
// SIG // MIIECQIBATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAcpPwrPtAw0YbAABAAAByjANBglghkgB
// SIG // ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
// SIG // DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCBIMW9l3lPNgrOE
// SIG // DtpZeirrErVDuIdtIrqpgwUbqZGgiDCB+gYLKoZIhvcN
// SIG // AQkQAi8xgeowgecwgeQwgb0EIBM9G/Ob61VNrJWQJOI7
// SIG // dUgxJOiM2QMFQqFsBdys3BrgMIGYMIGApH4wfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAAHKT8Kz7QMN
// SIG // GGwAAQAAAcowIgQgPi0ueyScmPxIVgDvfsn7KhxsmAg8
// SIG // LxdZ2V2X3t/n0I8wDQYJKoZIhvcNAQELBQAEggIAS5OE
// SIG // ST8084ZTdERzRyXPku4+3MRjlbLDmVxLhwUQhqSW/079
// SIG // HhBW7IH6/6qof2E1a/fSHgTJDps9airlT+tlIQEIce39
// SIG // suQmkVoXDEY6P0rsMryIwSc0fBaGdgAkS4+d4cVC4T87
// SIG // /9BZRFjF1Sb8AvzSCi/O/bKEtkBQWCtSsn9smxlUJuD9
// SIG // fQVLJDIk/abGiDVtScKgiWY0niMzjUbi7AUSTchteWUc
// SIG // +wZdsx9HqO63ooasYPWiHFpqNlz3ziLmFqn+N6/VVI8H
// SIG // lxOby4rlUJ8Fc21KIXzXbn9LaS44dVkIDqdkZ1F2fvpO
// SIG // DaKmoIiEhzdcfrDlW+ejQDcNajLhHM2gF6BNd9wwmllc
// SIG // a2lT2sAkbQ67Uuo/0kdkY8DT4tlRkgv1CT/y2OPAIQwD
// SIG // cYgu4DS+SLfKAMf52TFJXy6U/4AiCv0A60jN1J6Ws8wB
// SIG // B/CrAnvtDt+e/LOy+4zJxImSYAChZpKbbtgeZooilf4j
// SIG // /pCZM2ioiIi3f1AD1K4MZHgbCdHgYiMA+LLkJ8EFMzrH
// SIG // f8sBZbejufzfDSvuj+zH6PokIEdjHZx2/baJtwKcuXLU
// SIG // FM2ZdY8nXTZJpxcnMVQ+Xn/kDEip2CwjMjejVFNMnxco
// SIG // PZ6t9MC5qeUHc/ucsjh40EZmZwg9/Px6cKv0Wk68QsVx
// SIG // gOSdw/VsjyTRKtHCPqI=
// SIG // End signature block
