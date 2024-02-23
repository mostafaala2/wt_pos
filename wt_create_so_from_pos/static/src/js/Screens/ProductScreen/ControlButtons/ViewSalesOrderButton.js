/** @odoo-module */

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { useService } from "@web/core/utils/hooks";
import { Component } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";

export class ViewSaleOrderButton extends Component {
    static template = "wt_create_so_from_pos.ViewSaleOrderButton";
    setup() {
        this.pos = usePos();
    }
    async onClick() {
        var self = this;
        this.pos.showScreen('SaleOrderScreen');
    }
}

ProductScreen.addControlButton({
    component: ViewSaleOrderButton,
    condition: function () {
        return this.pos.config.create_so;
    },
});


