/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

// ruleset: annoyances-widgets

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#chatbotToronto","#floating-experience-feature-tour-popover,\n#view-__module-context__-_amzn_conversational-experience-module__tandalone-0",".chat-button,\n.chat-container",".chatWindow,\n.chatbotSection,\n.chatbotSlider,\n.chatbotentrybtn,\n.healthshotsChannels,\n.secBannerWidget",".rufus-panel-container",".woot-widget-bubble"];

const hostnamesMap = new Map([["hp.com",0],["docs.aws.amazon.com",1],["casbin.org",2],["healthshots.com",3],["amazon.com",4],["therealdeal.com",5]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
