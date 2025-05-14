import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace hcr.tvseries.tvseries.controller
 */
export default class MainView extends Controller {

    public onInit(): void {
        // Sample data for TV series
        const aSeries = [
            {
                seriesName: "Breaking Bad",
                author: "Vince Gilligan",
                numEpisodes: 62,
                yearsOfEmission: "2008-2013"
            },
            {
                seriesName: "Stranger Things",
                author: "The Duffer Brothers",
                numEpisodes: 34,
                yearsOfEmission: "2016-2025"
            },
            {
                seriesName: "Game of Thrones",
                author: "David Benioff & D. B. Weiss",
                numEpisodes: 73,
                yearsOfEmission: "2011-2019"
            }
        ];

        // Create and set the model
        const oModel = new JSONModel({ tvSeries: aSeries });
        const oView = this.getView();
        if (oView) {
            oView.setModel(oModel);
        }
    }
}