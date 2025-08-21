# COVR Development Plan
*Vendor Risk Management Platform - Iterative Development Roadmap*

## 🎯 Project Overview
Building a web app for small teams to track third-party vendors, collect security docs, and get automatically alerted if a vendor is breached or compliance docs are about to expire.

## 📊 Current State Assessment
### ✅ Already Implemented
- [x] Next.js 15 project structure with App Router
- [x] TypeScript 5.x set
- [x] Tailwind CSS + shadcn/ui components
- [x] Prisma schema with core models (User, Organization, Membership, Vendor, AuditLog)
- [x] Auth.js v5 with Google/GitHub OAuth
- [x] Basic RBAC roles (ADMIN, ANALYST, VIEWER)
- [x] Database migrations setup
- [x] Basic UI components (Avatar, Button, Card, Dropdown, Navigation)

### 🔄 Partially Implemented
- [ ] RBAC middleware and route protection
- [ ] Organization-scoped data access
- [ ] Basic dashboard structure

### ❌ Not Yet Implemented
- [ ] Complete vendor management CRUD
- [ ] Document upload and expiry tracking
- [ ] Breach/news monitoring
- [ ] Task management system
- [ ] Notification system
- [ ] Background job processing

---

## 🚀 Phase 1: Foundation & Core Auth (Week 1-2)
*Goal: Secure, multi-tenant foundation with proper RBAC*

### 1.1 Complete Authentication & RBAC
- [ ] **Environment Setup**
  - [ ] Set up Supabase PostgreSQL database
  - [ ] Configure Google OAuth credentials
  - [ ] Set up environment variables (.env.local)
  - [ ] Test database connection and migrations

- [ ] **RBAC Implementation**
  - [ ] Complete org-scoped middleware for route protection
  - [ ] Create RBAC helper functions (`hasPermission`, `requireRole`)
  - [ ] Implement organization context/switching
  - [ ] Add server-side route guards

- [ ] **Organization Management**
  - [ ] Organization creation flow for new users
  - [ ] Organization selection/switching UI
  - [ ] Team member invitation system
  - [ ] Role management for admins

### 1.2 Core UI Framework
- [ ] **Layout & Navigation**
  - [ ] Main dashboard layout with sidebar
  - [ ] Organization switcher in header
  - [ ] User profile dropdown with org context
  - [ ] Responsive navigation menu

- [ ] **Design System**
  - [ ] Implement dark theme with intentional color usage
  - [ ] Create consistent spacing and typography
  - [ ] Social app-inspired component styling
  - [ ] Loading states and error boundaries

- [ ] **Testing Foundation**
  - [ ] Set up Jest + React Testing Library
  - [ ] Configure Playwright for E2E tests
  - [ ] Create basic test utilities and setup
  - [ ] Add test scripts to package.json

### 📋 Phase 1 Success Criteria
- [ ] Users can sign in with Google/GitHub OAuth
- [ ] New users automatically create or join an organization
- [ ] Role-based access control properly restricts features by user role
- [ ] Dashboard loads with organization context and proper navigation
- [ ] All routes are protected server-side with middleware
- [ ] Organization switching works seamlessly
- [ ] Clean, dark-themed UI that's responsive on mobile
- [ ] Basic test suite runs successfully with CI/CD integration
- [ ] Critical auth flows have unit and E2E test coverage

---

## 📊 Phase 2: Vendor Registry & Risk Management (Week 3-4)
*Goal: Complete CRUD for vendors with risk scoring*

### 2.1 Vendor Management System
- [ ] **Vendor CRUD Operations**
  - [ ] Vendor creation form with validation (Zod schemas)
  - [ ] Vendor listing page with search/filtering
  - [ ] Vendor detail view with edit capabilities
  - [ ] Soft delete functionality

- [ ] **Risk Scoring Engine**
  - [ ] Risk level input (1-10 scale)
  - [ ] Data sensitivity classification
  - [ ] Computed risk score algorithm
  - [ ] Risk visualization components (badges, charts)

### 2.2 Enhanced Data Model
- [ ] **Missing Prisma Models**
  - [ ] Add Document model for file tracking
  - [ ] Add Incident model for breach tracking
  - [ ] Add Task model for workflow management
  - [ ] Update relations and indexes

- [ ] **Data Validation**
  - [ ] Shared Zod schemas for API/UI validation
  - [ ] Server Actions for simple mutations
  - [ ] Form validation with error handling

- [ ] **Testing Coverage**
  - [ ] Unit tests for vendor CRUD operations
  - [ ] Component tests for vendor forms and listings
  - [ ] E2E tests for vendor management workflows
  - [ ] API endpoint testing for vendor routes

### 📋 Phase 2 Success Criteria
- [ ] Users can create, read, update, and delete vendors
- [ ] Vendor forms include all required fields (name, domain, owner, risk level, data sensitivity)
- [ ] Risk score is automatically computed and displayed
- [ ] Vendor listing page shows all vendors with search and filtering
- [ ] Only organization members can see their org's vendors
- [ ] Audit logs capture all vendor changes with before/after states
- [ ] Data validation works consistently across API and UI
- [ ] All vendor functionality has comprehensive test coverage
- [ ] Tests verify organization-scoped data access controls

---

## 📄 Phase 3: Document Management & Expiry Tracking (Week 5-6)
*Goal: Secure document upload with automated expiry monitoring*

### 3.1 File Upload System
- [ ] **AWS S3 Integration**
  - [ ] Set up AWS S3 bucket with proper permissions
  - [ ] Implement presigned URL generation for secure uploads
  - [ ] File type validation (PDF, images for certificates)
  - [ ] File size limits and virus scanning considerations

- [ ] **Document Management**
  - [ ] Document upload UI with drag-and-drop
  - [ ] Document listing per vendor
  - [ ] Document preview/download functionality
  - [ ] Document categorization (SOC 2, ISO, etc.)

### 3.2 Expiry Tracking System
- [ ] **Date Parsing & Storage**
  - [ ] Manual expiry date input
  - [ ] OCR integration for automatic date extraction (future enhancement)
  - [ ] Expiry date validation and formatting

- [ ] **Background Job Setup**
  - [ ] Integrate Inngest for job processing
  - [ ] Daily expiry check job (T-30, T-7, T-1)
  - [ ] Job monitoring and error handling

- [ ] **Testing Coverage**
  - [ ] Unit tests for document upload and validation logic
  - [ ] Integration tests for S3 presigned URL generation
  - [ ] Background job testing with mocked schedules
  - [ ] E2E tests for document upload and expiry workflows

### 📋 Phase 3 Success Criteria
- [ ] Users can upload documents (SOC 2, ISO certs) via secure presigned URLs
- [ ] Documents are properly associated with vendors and stored in S3
- [ ] Expiry dates can be set manually and are tracked in the database
- [ ] Background job runs daily to check for expiring documents
- [ ] Email/Slack notifications sent at T-30 and T-7 days before expiry
- [ ] Document listing shows expiry status with visual indicators
- [ ] Users can download/preview uploaded documents securely
- [ ] All document management features have test coverage
- [ ] Background jobs can be tested and debugged locally

---

## 🚨 Phase 4: Breach Monitoring & Incident Management (Week 7-8)
*Goal: Automated breach detection with incident workflow*

### 4.1 Breach Detection System
- [ ] **External Data Sources**
  - [ ] Research and integrate security news RSS feeds
  - [ ] Implement vendor domain/name matching algorithms
  - [ ] Set up scheduled jobs for feed monitoring
  - [ ] False positive filtering and confidence scoring

- [ ] **Incident Management**
  - [ ] Incident creation from detected breaches
  - [ ] Manual incident creation by users
  - [ ] Incident status workflow (New → Investigating → Resolved)
  - [ ] Incident detail views with timeline

### 4.2 Alert System Foundation
- [ ] **Notification Infrastructure**
  - [ ] Slack webhook integration for breach alerts
  - [ ] Email notifications via Resend (dev) / SES (prod)
  - [ ] User notification preferences
  - [ ] Rate limiting for external API calls (Upstash Redis)

- [ ] **Testing Coverage**
  - [ ] Unit tests for breach detection algorithms
  - [ ] Mock external API responses for reliable testing
  - [ ] Integration tests for notification systems
  - [ ] E2E tests for incident creation and management

### 📋 Phase 4 Success Criteria
- [ ] Scheduled job monitors security news feeds for vendor mentions
- [ ] System automatically creates incidents when potential breaches are detected
- [ ] Users can manually create and manage incidents
- [ ] Incident workflow supports status progression (New → Investigating → Resolved)
- [ ] Slack notifications sent immediately when breaches are detected
- [ ] Email notifications include incident details and links
- [ ] False positive rate is manageable with confidence scoring
- [ ] Rate limiting prevents API abuse and reduces costs
- [ ] Breach detection logic is thoroughly tested with various scenarios
- [ ] External API integrations have proper error handling and fallbacks

---

## ✅ Phase 5: Task Management & Workflows (Week 9-10)
*Goal: Complete task assignment and tracking system*

### 5.1 Task Management System
- [ ] **Task CRUD Operations**
  - [ ] Task creation linked to vendors/incidents
  - [ ] Task assignment to team members
  - [ ] Due date management and overdue tracking
  - [ ] Task status workflow (Todo → In Progress → Done)

- [ ] **Workflow UI**
  - [ ] Kanban board view for tasks
  - [ ] Task list view with filtering
  - [ ] Task detail modal with comments
  - [ ] Bulk task operations

### 5.2 Collaboration Features
- [ ] **Comments & Updates**
  - [ ] Task comment system
  - [ ] Activity timeline per task
  - [ ] @mentions and notifications
  - [ ] File attachments to tasks

- [ ] **Testing Coverage**
  - [ ] Unit tests for task management logic
  - [ ] Component tests for Kanban and list views
  - [ ] E2E tests for complete task workflows
  - [ ] Performance tests for bulk operations

### 📋 Phase 5 Success Criteria
- [ ] Users can create tasks linked to vendors or incidents
- [ ] Tasks can be assigned to team members with due dates
- [ ] Kanban board view allows drag-and-drop status changes
- [ ] Task list view supports filtering by assignee, status, due date
- [ ] Comments and @mentions work within tasks
- [ ] Activity timeline shows all task updates and changes
- [ ] Email notifications sent for task assignments and mentions
- [ ] Bulk operations available for managing multiple tasks
- [ ] All task management features are well-tested and reliable
- [ ] Performance remains good with large numbers of tasks

---

## 📈 Phase 6: Analytics & Reporting (Week 11-12)
*Goal: Insights dashboard and audit capabilities*

### 6.1 Analytics Dashboard
- [ ] **Risk Analytics**
  - [ ] Organization risk score overview
  - [ ] Vendor risk distribution charts
  - [ ] Expiry timeline visualization
  - [ ] Incident trend analysis

- [ ] **Compliance Reporting**
  - [ ] Document expiry reports
  - [ ] Vendor compliance status
  - [ ] Audit log exports (CSV)
  - [ ] Custom date range filtering

### 6.2 Audit System Enhancement
- [ ] **Comprehensive Logging**
  - [ ] Automatic audit log generation for all CRUD operations
  - [ ] User action tracking middleware
  - [ ] Data change history with before/after states
  - [ ] Audit log search and filtering

- [ ] **Testing Coverage**
  - [ ] Unit tests for analytics calculations
  - [ ] Integration tests for report generation
  - [ ] Performance tests for large datasets
  - [ ] E2E tests for dashboard interactions

### 📋 Phase 6 Success Criteria
- [ ] Dashboard displays organization-wide risk score and trends
- [ ] Charts show vendor risk distribution and expiry timelines
- [ ] Incident trends and resolution times are visualized
- [ ] All user actions are automatically logged in audit trail
- [ ] Audit logs can be searched, filtered, and exported to CSV
- [ ] Compliance reports show document status across all vendors
- [ ] Custom date range filtering works across all reports
- [ ] Data exports include all necessary fields for compliance audits
- [ ] Analytics perform well with realistic data volumes
- [ ] All reporting features have comprehensive test coverage

---

## 🔧 Phase 7: Polish & Production Readiness (Week 13-14)
*Goal: Production deployment with monitoring*

### 7.1 Test Suite Completion & Quality Assurance
- [ ] **Test Suite Finalization**
  - [ ] Achieve >80% code coverage across all modules
  - [ ] Complete E2E test suite covering all major workflows
  - [ ] Performance testing under realistic load
  - [ ] Security testing for authentication and authorization

- [ ] **Performance Optimization**
  - [ ] Image optimization and lazy loading
  - [ ] Database query optimization and indexing
  - [ ] Caching strategy implementation
  - [ ] Bundle size analysis and optimization

### 7.2 Production Infrastructure
- [ ] **Deployment Setup**
  - [ ] Vercel production deployment configuration
  - [ ] Environment variable management
  - [ ] Database backup strategy
  - [ ] Basic S3 file serving (CloudFront CDN to be added later for optimization)

- [ ] **Monitoring & Observability**
  - [ ] Sentry integration for error tracking
  - [ ] Health check endpoint enhancement
  - [ ] Performance monitoring setup
  - [ ] Log aggregation and alerting

### 📋 Phase 7 Success Criteria
- [ ] Complete test suite with >80% coverage runs in CI/CD
- [ ] E2E tests verify all major user workflows end-to-end
- [ ] Application deploys successfully to Vercel production
- [ ] Database migrations run automatically on deployment
- [ ] Error tracking captures and alerts on production issues
- [ ] Health check endpoint reports system status
- [ ] Performance metrics show acceptable load times (<2s)
- [ ] File delivery from S3 works reliably (CDN optimization for later)

---

## 🎁 Phase 8: Advanced Features & Enhancements (Week 15+)
*Goal: Advanced functionality and user experience improvements*

### 8.1 Advanced Features
- [ ] **Enhanced Integrations**
  - [ ] Additional OAuth providers
  - [ ] API webhooks for external systems
  - [ ] Zapier/Make.com integration
  - [ ] Advanced breach detection sources

- [ ] **User Experience**
  - [ ] Advanced search with filters
  - [ ] Bulk operations for vendors/documents
  - [ ] Mobile-responsive enhancements
  - [ ] Keyboard shortcuts and accessibility

### 8.2 Enterprise Features
- [ ] **Advanced RBAC**
  - [ ] Custom role definitions
  - [ ] Department-based access control
  - [ ] Advanced approval workflows
  - [ ] Single Sign-On (SAML/OIDC)

---

## ❓ Open Questions Requiring Your Input

1. ~~**External APIs**: Do you have preferences for specific security news APIs or RSS feeds for breach monitoring?~~  
   ✅ **Resolved**: Will use the most secure API that integrates well with our tech stack (likely RSS feeds from reputable security sources like CISA, CVE databases)

2. ~~**File Storage**: Should we implement CloudFront CDN from the start, or add it later for performance optimization?~~  
   ✅ **Resolved**: Add CloudFront later for performance optimization, start with direct S3 serving

3. **Notification Preferences**: What's your priority order for notification channels? (Slack, Email, In-app)

4. **Risk Scoring**: What specific factors should contribute to the computed risk score beyond risk level and data sensitivity?

5. **Organization Onboarding**: Should new users automatically create an organization, or should there be an invitation-only flow?

6. **Document Types**: Are there specific compliance document types beyond SOC 2 and ISO that should be supported from day one?

7. **Deployment Timeline**: Do you need a staging environment, or is development → production sufficient?

---

## 📅 Timeline Summary
- **Phase 1-2**: Foundation & Vendor Management (4 weeks)
- **Phase 3-4**: Documents & Breach Monitoring (4 weeks)
- **Phase 5-6**: Tasks & Analytics (4 weeks)
- **Phase 7**: Production Ready (2 weeks)
- **Phase 8+**: Advanced Features (ongoing)

**Total MVP Timeline: ~14 weeks**

---

## 🏁 Overall Project Success
When all phases are complete, COVR will be a fully functional vendor risk management platform that enables small teams to:

✅ **Securely manage vendor relationships** with proper access controls  
✅ **Automatically track compliance documents** with expiry alerts  
✅ **Monitor security breaches** with real-time notifications  
✅ **Collaborate on remediation tasks** with workflow management  
✅ **Generate compliance reports** with comprehensive audit trails  
✅ **Scale reliably** with production-grade infrastructure  

*This plan will be updated and checked off as we progress through development.*
