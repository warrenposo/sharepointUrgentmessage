import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IUrgentMessageWebPartProps {
    description: string;
    list: string;
    label: string;
    message: string;
}
export default class UrgentMessageWebPart extends BaseClientSideWebPart<IUrgentMessageWebPartProps> {
    private _themeProvider;
    private _themeVariant;
    protected onInit(): Promise<void>;
    private _handleThemeChangedEvent;
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=UrgentMessageWebPart.d.ts.map