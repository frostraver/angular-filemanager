(function(angular) {
    'use strict';
    angular.module('FileManagerApp').provider('fileManagerConfig', function() {

        var values = {
            appName: 'angular-filemanager v1.5',
            defaultLang: 'en',

            listUrl: 'bridges/php/handler.php',
            uploadUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            renameUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            copyUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            moveUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            removeUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            editUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            getContentUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            createFolderUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            downloadFileUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            downloadMultipleUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            compressUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            extractUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            permissionsUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            checkActivateUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            activateUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            newVersionUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            previewUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            mailUrl: 'https://ws.lucky.anglegaming.com/ms/pub/api',
            basePath: '/',

            searchForm: true,
            sidebar: true,
            breadcrumb: true,
            allowedActions: {
                upload: true,
                rename: true,
                move: true,
                copy: true,
                edit: true,
                changePermissions: true,
                compress: true,
                compressChooseName: true,
                extract: true,
                download: true,
                downloadMultiple: true,
                preview: true,
                remove: true,
                createFolder: true,
                pickFiles: false,
                pickFolders: false,
                activate: true,
                checkActivate: true,
                newVersion: true,
                sendMail: true
            },

            multipleDownloadFileName: 'angular-filemanager.zip',
            filterFileExtensions: [],
            showExtensionIcons: true,
            showSizeForDirectories: false,
            useBinarySizePrefixes: false,
            downloadFilesByAjax: true,
            previewImagesInModal: true,
            enablePermissionsRecursive: true,
            compressAsync: false,
            extractAsync: false,
            pickCallback: null,

            isEditableFilePattern: /\.(txt|diff?|patch|svg|asc|cnf|cfg|conf|html?|.html|cfm|cgi|aspx?|ini|pl|py|md|css|cs|js|jsp|log|htaccess|htpasswd|gitignore|gitattributes|env|json|atom|eml|rss|markdown|sql|xml|xslt?|sh|rb|as|bat|cmd|cob|for|ftn|frm|frx|inc|lisp|scm|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb|tmpl|lock|go|yml|yaml|tsv|lst)$/i,
            isImageFilePattern: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
            isExtractableFilePattern: /\.(gz|tar|rar|g?zip)$/i,
            tplPath: 'src/templates'
        };

        return {
            $get: function() {
                return values;
            },
            set: function (constants) {
                angular.extend(values, constants);
            }
        };

    });
})(angular);
