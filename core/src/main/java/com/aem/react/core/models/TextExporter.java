package com.aem.react.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;

@Model(
    adaptables = {SlingHttpServletRequest.class, Resource.class},
    adapters = {TextExporter.class, ComponentExporter.class},
    resourceType = "aemreactspa/components/text-spa",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = "jackson", extensions = "json")
public class TextExporter implements ComponentExporter {

    private static final Logger LOG = LoggerFactory.getLogger(TextExporter.class);

    @Default(values = "Default Text")
    @ValueMapValue
    @JsonProperty("text")
    private String[] texts;;

    @PostConstruct
    protected void init() {
        LOG.info("TextExporter initialized for resource type: {}", "aemreactspa/components/text-spa");
        LOG.info("Text value from JCR: {}", texts != null ? String.join(", ", texts) : "null");
    }

    public String[] getTexts() {
        return texts;
    }

    @Override
    @JsonProperty(":type")
    public String getExportedType() {
        return "aemreactspa/components/text-spa";
    }
}