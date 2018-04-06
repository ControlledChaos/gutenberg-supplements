/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields_rich_text__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields_plain_text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fields_textarea_control__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fields_input_field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields_url_input__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fields_image_upload__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fields_select_control__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fields_checkbox_control__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fields_radio_control__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fields_range_control__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fields_button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fields_color_palette__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fields_dropdown__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fields_code_editor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fields_date_time__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fields_form_toggle__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fields_tree_select__ = __webpack_require__(19);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Gutenberg Fields Middleware.
 */

var InspectorControls = wp.blocks.InspectorControls;
var addFilter = wp.hooks.addFilter;

/**
 * Fields
 */



















var GutenbergFieldsMiddleWare = function () {
	function GutenbergFieldsMiddleWare(config) {
		_classCallCheck(this, GutenbergFieldsMiddleWare);

		this.blockConfigs = {};
		this.fields = {};
		this.inspectorControlFields = {};
		this.inspectorControls = '';
		this.config = _.extend({}, config);

		this.setBlockComponents = this.setBlockComponents.bind(this);
	}

	_createClass(GutenbergFieldsMiddleWare, [{
		key: 'getSettings',
		value: function getSettings() {
			var _this = this;

			this.blockConfigs = _.extend({
				title: '',

				description: '',

				icon: 'universal-access-alt',

				category: 'common',

				attributes: {}

			}, this.config);

			this.blockConfigs.edit = function (props) {
				_this.setBlockComponents(props);
				return _this.config.edit ? _this.config.edit(props, _this) : _this.edit(props);
			};

			this.blockConfigs.save = function (props) {
				return _this.config.save ? _this.config.save(props, _this) : _this.save(props);
			};

			return this.blockConfigs;
		}
	}, {
		key: 'getFields',
		value: function getFields(fieldType, attributeKey, props, config) {
			var fields = {};

			switch (fieldType) {
				case 'text':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_1__fields_plain_text__["a" /* default */])(props, config, attributeKey);
					break;
				case 'rich-text':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_0__fields_rich_text__["a" /* default */])(props, config, attributeKey);
					break;
				case 'link':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_4__fields_url_input__["a" /* default */])(props, config, attributeKey);
					break;
				case 'image':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_5__fields_image_upload__["a" /* default */])(props, config, attributeKey);
					break;
				case 'select':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_6__fields_select_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'range':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_9__fields_range_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'radio':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_8__fields_radio_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'checkbox':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_7__fields_checkbox_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'button':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_10__fields_button__["a" /* default */])(props, config, attributeKey);
					break;
				case 'color':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_11__fields_color_palette__["a" /* default */])(props, config, attributeKey);
					break;
				case 'dropdown':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_12__fields_dropdown__["a" /* default */])(props, config);
					break;
				case 'editor':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_13__fields_code_editor__["a" /* default */])(props, config, attributeKey);
					break;
				case 'date-time':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_14__fields_date_time__["a" /* default */])(props, config, attributeKey);
					break;
				case 'textarea':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_2__fields_textarea_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'email':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_3__fields_input_field__["a" /* default */])(props, config, attributeKey);
					break;
				case 'hidden':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_3__fields_input_field__["a" /* default */])(props, config, attributeKey);
					break;
				case 'number':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_3__fields_input_field__["a" /* default */])(props, config, attributeKey);
					break;
				case 'search':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_3__fields_input_field__["a" /* default */])(props, config, attributeKey);
					break;
				case 'tel':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_3__fields_input_field__["a" /* default */])(props, config, attributeKey);
					break;
				case 'switch':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_15__fields_form_toggle__["a" /* default */])(props, config, attributeKey);
					break;
				case 'tree-select':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_16__fields_tree_select__["a" /* default */])(props, config, attributeKey);
					break;
			}

			return fields;
		}
	}, {
		key: 'setBlockComponents',
		value: function setBlockComponents(props) {
			var _this2 = this;

			_.each(this.blockConfigs.attributes, function (attribute, attributeKey) {
				if (attribute.field) {
					if ('inspector' === attribute.field.placement) {
						_.extend(_this2.inspectorControlFields, _this2.getFields(attribute.field.type, attributeKey, props, attribute.field));
					} else {
						_.extend(_this2.fields, _this2.getFields(attribute.field.type, attributeKey, props, attribute.field));
					}
				}
			});

			this.inspectorControls = props.isSelected ? React.createElement(
				InspectorControls,
				{ key: 'inspector-control' },
				Object.keys(this.inspectorControlFields).map(function (key) {
					return _this2.inspectorControlFields[key];
				})
			) : null;
		}
	}, {
		key: 'edit',
		value: function edit(props) {
			var _this3 = this;

			return [this.inspectorControls, React.createElement(
				'div',
				{ key: props.className },
				Object.keys(this.fields).map(function (key) {
					return _this3.fields[key];
				})
			)];
		}
	}, {
		key: 'save',
		value: function save(props) {
			return null;
		}
	}]);

	return GutenbergFieldsMiddleWare;
}();

addFilter('blocks.registerBlockType', 'gutenberg-field-middleware/registration/attributes', function (settings, name) {
	if (!/^core/.test(name)) {
		var middleware = new GutenbergFieldsMiddleWare(settings);
		return middleware.getSettings();
	}

	return settings;
}, 1);

/* harmony default export */ __webpack_exports__["default"] = (GutenbergFieldsMiddleWare);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = richText;
/**
 * Text field.
 */

var RichText = wp.blocks.RichText;


function richText(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(RichText, fieldAttributes);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = plainText;
/**
 * Text field.
 */

var PlainText = wp.blocks.PlainText;


function plainText(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(PlainText, fieldAttributes);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = textareaControl;
/**
 * Textarea field.
 */

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    BaseControl = _wp$components.BaseControl;


function textareaControl(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(
		BaseControl,
		{
			id: fieldAttributes.id
		},
		React.createElement(TextareaControl, fieldAttributes)
	);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inputField;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Input field for email, hidden, number, search, tel.
 */

var BaseControl = wp.components.BaseControl;


function inputField(props, config, attributeKey) {
	var defaultAttributes = {

		value: props.attributes[attributeKey],

		className: 'components-text-control__input'
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (event) {
		if (config.onChange) {
			config.onChange(event, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = event.target.value;
			props.setAttributes(newAttributes);
		}
	};

	var id = fieldAttributes.id ? fieldAttributes.id : _.uniqueId(attributeKey);
	var label = fieldAttributes.label;
	var help = fieldAttributes.help;

	delete fieldAttributes.id;
	delete fieldAttributes.placement;
	delete fieldAttributes.label;
	delete fieldAttributes.help;

	return React.createElement(
		BaseControl,
		{ id: id, label: label, help: help },
		React.createElement('input', _extends({
			id: id
		}, fieldAttributes))
	);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = urlInput;
/**
 * Url field.
 */

var UrlInput = wp.blocks.UrlInput;
var BaseControl = wp.components.BaseControl;


function urlInput(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	if ('inspector' === config.placement) {
		delete fieldAttributes.placement;
		return React.createElement(
			BaseControl,
			{
				label: fieldAttributes.label,
				id: fieldAttributes.id,
				help: fieldAttributes.help,
				className: fieldAttributes.className
			},
			React.createElement(UrlInput, fieldAttributes)
		);
	}

	return React.createElement(UrlInput, fieldAttributes);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = imageUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__ = __webpack_require__(8);
/**
 * Image Field.
 */

var MediaUpload = wp.blocks.MediaUpload;
var Button = wp.components.Button;
var __ = wp.i18n.__;




function imageUpload(props, config, attributeKey) {
	var buttonText = config.buttonText ? config.buttonText : __('Open Media Library');
	var image = props.attributes[attributeKey];

	var defaultAttributes = {

		type: 'image',

		value: image || '',

		render: function render(_ref) {
			var open = _ref.open;

			var nodes = [];

			if (!image) {
				if (config.imagePlaceholder) {
					nodes.push(Object(__WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__["a" /* default */])(props, config, attributeKey));
				} else {
					nodes.push(React.createElement(
						Button,
						{ className: 'button button-large button-upload', onClick: open },
						buttonText
					));
				}
			} else {
				nodes.push(React.createElement('img', { className: 'uploaded-image', src: image.url, alt: image.alt }));

				if (!!config.removeButtonText) {
					nodes.push(React.createElement(
						Button,
						{ className: 'button button-large button-remove', onClick: function onClick() {
								var newAttributes = {};
								newAttributes[attributeKey] = '';
								props.setAttributes(newAttributes);
							} },
						config.removeButtonText
					));
				}
			}

			return React.createElement(
				'div',
				{ className: 'blocks-' + config.type + '-upload' },
				nodes
			);
		}
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onSelect = function (media) {
		if (config.onSelect) {
			config.onSelect(media, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = media;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.buttonText;
	delete fieldAttributes.imagePlaceholder;
	delete fieldAttributes.removeButtonText;

	return React.createElement(MediaUpload, fieldAttributes);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = imagePlaceholder;
/**
 * Image Placeholder.
 */

var ImagePlaceholder = wp.blocks.ImagePlaceholder;
var __ = wp.i18n.__;


function imagePlaceholder(props, config, attributeKey) {
	var defaultAttributes = {
		onSelectImage: function onSelectImage(media) {
			var newAttributes = {};
			newAttributes[attributeKey] = media;
			props.setAttributes(newAttributes);
		},


		className: 'image-placeholder',

		icon: 'format-gallery',

		label: __('Image'),

		multiple: false
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	return React.createElement(ImagePlaceholder, fieldAttributes);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = selectControl;
/**
 * Select field.
 */

var SelectControl = wp.components.SelectControl;


function selectControl(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(SelectControl, fieldAttributes);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkboxControl;
/**
 * Checkbox field.
 */

var CheckboxControl = wp.components.CheckboxControl;


function checkboxControl(props, config, attributeKey) {
	var defaultAttributes = {
		value: '1',
		checked: props.attributes[attributeKey]
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (checked) {
		if (config.onChange) {
			config.onChange(checked, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = checked ? defaultAttributes.value : false;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(CheckboxControl, fieldAttributes);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = radioControl;
/**
 * Radio Control field.
 */

var RadioControl = wp.components.RadioControl;


function radioControl(props, config, attributeKey) {
	var defaultAttributes = {
		selected: props.attributes[attributeKey]
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(RadioControl, fieldAttributes);
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rangeControl;
/**
 * Range field.
 */

var RangeControl = wp.components.RangeControl;


function rangeControl(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(RangeControl, fieldAttributes);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = button;
/**
 * Button field.
 */

var Button = wp.components.Button;
var RichText = wp.blocks.RichText;
var __ = wp.i18n.__;


function button(props, config, attributeKey) {
	var defaultAttributes = {
		buttonText: __('Button')
	};

	var fieldAttributes = _.extend(defaultAttributes, config);
	var buttonText = fieldAttributes.buttonText;
	var editable = fieldAttributes.editable;

	var editableButton = React.createElement(
		"span",
		{ className: "wp-block-button", key: "button" },
		React.createElement(RichText, {
			tagName: "span",
			placeholder: __('Add text…'),
			value: props.attributes[attributeKey],
			onChange: function onChange(value) {
				var newAttributes = {};
				newAttributes[attributeKey] = value;
				props.setAttributes(newAttributes);
			},
			className: "wp-block-button__link",
			keepPlaceholderOnFocus: true
		})
	);

	delete fieldAttributes.buttonText;
	delete fieldAttributes.type;
	delete fieldAttributes.editable;

	if (editable) {
		return editableButton;
	}

	return React.createElement(
		Button,
		fieldAttributes,
		buttonText
	);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = colorPalette;
/**
 * Color Palette field.
 */

var ColorPalette = wp.blocks.ColorPalette;
var PanelColor = wp.components.PanelColor;
var __ = wp.i18n.__;


function colorPalette(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || '',

		label: __('Color')
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(
		PanelColor,
		{ title: fieldAttributes.label, colorValue: fieldAttributes.value },
		React.createElement(ColorPalette, fieldAttributes)
	);
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropdown;
/**
 * Dropdown field.
 */

var Dropdown = wp.components.Dropdown;
var __ = wp.i18n.__;


function dropdown(props, config) {
	var defaultAttributes = {
		renderToggle: function renderToggle(_ref) {
			var isOpen = _ref.isOpen,
			    onToggle = _ref.onToggle;

			return React.createElement(
				'button',
				{ className: 'button-primary button', onClick: onToggle, 'aria-expanded': isOpen },
				__('Toggle Popover!')
			);
		},
		renderContent: function renderContent() {
			return React.createElement(
				'div',
				null,
				__('Dummy Popover Content!')
			);
		}
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return React.createElement(Dropdown, fieldAttributes);
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = editor;
/**
 * Code editor field.
 */

var CodeEditor = wp.components.CodeEditor;


function editor(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(CodeEditor, fieldAttributes);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dateTimePicker;
/**
 * Date time field.
 */

var _wp$components = wp.components,
    DateTimePicker = _wp$components.DateTimePicker,
    PanelBody = _wp$components.PanelBody;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    settings = _wp$date.settings;
var __ = wp.i18n.__;


function dateTimePicker(props, config, attributeKey) {
	var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
	.replace(/\\\\/g, '') // Replace "//" with empty strings
	.split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
	);

	var defaultAttributes = {

		locale: settings.l10n.locale,

		currentDate: props.attributes[attributeKey],

		is12Hour: is12HourTime,

		label: __('Date')
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	var label = fieldAttributes.label;

	var getFormattedDate = function getFormattedDate() {
		return props.attributes[attributeKey] ? dateI18n(settings.formats.datetime, props.attributes[attributeKey]) : '';
	};

	delete fieldAttributes.type;
	delete fieldAttributes.label;

	return React.createElement(
		PanelBody,
		{ initialOpen: false, title: [label + ': ', React.createElement(
				'span',
				{ key: 'label' },
				getFormattedDate()
			)] },
		React.createElement(DateTimePicker, fieldAttributes)
	);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formToggle;
/**
 * Switch field.
 */

var _wp$components = wp.components,
    FormToggle = _wp$components.FormToggle,
    BaseControl = _wp$components.BaseControl;


function formToggle(props, config, attributeKey) {
	var defaultAttributes = {
		checked: 'on' === props.attributes[attributeKey],
		value: props.attributes[attributeKey] || 'off'
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (event) {
		if (config.onChange) {
			config.onChange(event, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = 'on' === event.target.value ? 'off' : 'on';
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(
		BaseControl,
		{
			label: fieldAttributes.label,
			id: fieldAttributes.id,
			help: fieldAttributes.help,
			className: 'components-toggle-control'
		},
		React.createElement(FormToggle, fieldAttributes)
	);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = treeSelect;
/**
 * tree-select field.
 */

var TreeSelect = wp.components.TreeSelect;


function treeSelect(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey]
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(TreeSelect, fieldAttributes);
}

/***/ })
/******/ ]);