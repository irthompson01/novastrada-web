#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple template validation and build script for NovaStrada website
class TemplateBuildTool {
    constructor() {
        this.htmlFiles = [];
        this.errors = [];
        this.warnings = [];
    }

    // Find all HTML files
    findHtmlFiles() {
        const files = fs.readdirSync('.');
        this.htmlFiles = files.filter(file => file.endsWith('.html'));
        console.log(`Found ${this.htmlFiles.length} HTML files:`, this.htmlFiles);
    }

    // Validate that all HTML files use the templating system
    validateTemplating() {
        console.log('\n🔍 Validating templating system...\n');
        
        this.htmlFiles.forEach(file => {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check if file uses templating containers
            const hasNavbarContainer = content.includes('id="navbar-container"');
            const hasFooterContainer = content.includes('id="footer-container"');
            const hasTemplateScript = content.includes('js/templates.js');
            
            // Check for old hardcoded navbar/footer
            const hasHardcodedNavbar = content.includes('<nav class="navbar navbar-expand-lg');
            const hasHardcodedFooter = content.includes('<footer class="bg-dark py-4');
            
            console.log(`📄 ${file}:`);
            
            if (hasNavbarContainer && hasFooterContainer && hasTemplateScript) {
                console.log('  ✅ Uses templating system correctly');
            } else {
                if (!hasNavbarContainer) {
                    this.errors.push(`${file}: Missing navbar container`);
                    console.log('  ❌ Missing navbar container');
                }
                if (!hasFooterContainer) {
                    this.errors.push(`${file}: Missing footer container`);
                    console.log('  ❌ Missing footer container');
                }
                if (!hasTemplateScript) {
                    this.errors.push(`${file}: Missing templates.js script`);
                    console.log('  ❌ Missing templates.js script');
                }
            }
            
            if (hasHardcodedNavbar) {
                this.warnings.push(`${file}: Still has hardcoded navbar`);
                console.log('  ⚠️  Still has hardcoded navbar');
            }
            
            if (hasHardcodedFooter) {
                this.warnings.push(`${file}: Still has hardcoded footer`);
                console.log('  ⚠️  Still has hardcoded footer');
            }
            
            console.log('');
        });
    }

    // Generate a report
    generateReport() {
        console.log('\n📊 TEMPLATE VALIDATION REPORT\n');
        console.log('=' .repeat(50));
        
        if (this.errors.length === 0 && this.warnings.length === 0) {
            console.log('🎉 All files are using the templating system correctly!');
        } else {
            if (this.errors.length > 0) {
                console.log('\n❌ ERRORS:');
                this.errors.forEach(error => console.log(`  - ${error}`));
            }
            
            if (this.warnings.length > 0) {
                console.log('\n⚠️  WARNINGS:');
                this.warnings.forEach(warning => console.log(`  - ${warning}`));
            }
        }
        
        console.log('\n📈 SUMMARY:');
        console.log(`  Total files: ${this.htmlFiles.length}`);
        console.log(`  Errors: ${this.errors.length}`);
        console.log(`  Warnings: ${this.warnings.length}`);
        console.log('=' .repeat(50));
    }

    // Main build process
    build() {
        console.log('🚀 NovaStrada Template Build Tool\n');
        
        this.findHtmlFiles();
        this.validateTemplating();
        this.generateReport();
        
        // Exit with error code if there are errors
        if (this.errors.length > 0) {
            process.exit(1);
        }
    }
}

// Run the build tool
const buildTool = new TemplateBuildTool();
buildTool.build(); 