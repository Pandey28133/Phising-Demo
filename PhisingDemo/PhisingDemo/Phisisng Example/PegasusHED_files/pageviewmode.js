var nsPVM=nsPVM||{};nsPVM.PageViewMode=function(a){this.enumPageViewMode={DefaultView:1,EmbeddedView:2};this.PageView=this.enumPageViewMode.DefaultView;if(a){switch(a){case this.enumPageViewMode.DefaultView:this.PageView=this.enumPageViewMode.DefaultView;break;case this.enumPageViewMode.EmbeddedView:this.PageView=this.enumPageViewMode.EmbeddedView;break;default:this.PageView=this.enumPageViewMode.DefaultView;break}}return this.PageView};