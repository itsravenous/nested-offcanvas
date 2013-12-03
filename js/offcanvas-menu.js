var OffCanvas = function (options) {
	
	var self = this;

	if (!options.container) throw('OffCanvas: No container element passed');
	if (!options.menu) throw('OffCanvas: No menu element passed');
	if (!options.body) throw('OffCanvas: No body element passed');

	this.$container = $(options.container);
	this.$menu = $(options.menu);
	this.$body = $(options.body);

	this.$menu.on('click', 'a:not(.offcanvas-menu-back)', function () {
		self.toggleSub(this.getAttribute('href').substr(1));
	});

	this.$menu.find('.offcanvas-menu-sublist').each(function () {
		var $list = $(this);
		var listId = this.id;
		$list.prepend('<li><a href="#'+listId+'" class-"offcanvas-menu-back">Back</a></li>');
	});

}

OffCanvas.prototype = {
	
	show: function () {
		this.$container.addClass('offcanvas-active');
	},

	hide: function () {
		this.$container.removeClass('offcanvas-active');
	},

	toggle: function () {
		this.$container.toggleClass('offcanvas-active');
	},

	toggleSub: function (id) {
		$('#'+id).toggleClass('offcanvas-menu-sublist-active');
	}

}