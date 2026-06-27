"use client";

import {
  DashboardGrid,
  Header,
  HeaderCopy,
  IntelItem,
  IntelLabel,
  IntelligenceList,
  IntelValue,
  MapMarker,
  MapPlaceholder,
  Mission,
  Page,
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelType,
  PhaseLabel,
  PlaceholderText,
  ProductName,
  Shell,
  SideStack,
  StatusBadge
} from "./HomeDashboard.styles";
import content from "./HomeDashboard.content.json";

export function HomeDashboard() {
  return (
    <Page>
      <Shell>
        <Header>
          <HeaderCopy>
            <PhaseLabel>{content.phaseLabel}</PhaseLabel>
            <ProductName>{content.productName}</ProductName>
            <Mission>{content.mission}</Mission>
          </HeaderCopy>
          <StatusBadge>{content.status}</StatusBadge>
        </Header>

        <DashboardGrid>
          <Panel aria-labelledby="map-panel-title">
            <PanelHeader>
              <div>
                <PanelTitle id="map-panel-title">
                  {content.mapPanel.title}
                </PanelTitle>
                <PanelDescription>
                  {content.mapPanel.description}
                </PanelDescription>
              </div>
              <PanelType>{content.mapPanel.type}</PanelType>
            </PanelHeader>

            <MapPlaceholder>
              <div>
                <MapMarker />
                <PlaceholderText>
                  {content.mapPanel.placeholder}
                </PlaceholderText>
              </div>
            </MapPlaceholder>
          </Panel>

          <SideStack>
            <Panel aria-labelledby="country-panel-title">
              <PanelHeader>
                <div>
                  <PanelTitle id="country-panel-title">
                    {content.countryPanel.title}
                  </PanelTitle>
                  <PanelDescription>
                    {content.countryPanel.description}
                  </PanelDescription>
                </div>
                <PanelType>{content.countryPanel.type}</PanelType>
              </PanelHeader>

              <IntelligenceList>
                {content.countryPanel.items.map((item) => (
                  <IntelItem key={item.label}>
                    <IntelLabel>{item.label}</IntelLabel>
                    <IntelValue>{item.value}</IntelValue>
                  </IntelItem>
                ))}
              </IntelligenceList>
            </Panel>

            <Panel aria-labelledby="incidents-panel-title">
              <PanelHeader>
                <div>
                  <PanelTitle id="incidents-panel-title">
                    {content.incidentsPanel.title}
                  </PanelTitle>
                  <PanelDescription>
                    {content.incidentsPanel.description}
                  </PanelDescription>
                </div>
                <PanelType>{content.incidentsPanel.type}</PanelType>
              </PanelHeader>
            </Panel>
          </SideStack>
        </DashboardGrid>
      </Shell>
    </Page>
  );
}
