from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Helvetica", "B", 20)
pdf.cell(0, 12, "Chaturvedhi Narsimha", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 12)
pdf.cell(0, 8, "Frontend Developer | Web Development Intern", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.ln(10)

pdf.set_font("Helvetica", "B", 14)
pdf.cell(0, 10, "Contact", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 11)
pdf.cell(0, 7, "Email: chaturvedhi.narsimha@example.com", new_x="LMARGIN", new_y="NEXT")
pdf.cell(0, 7, "GitHub: github.com/Chatur7x", new_x="LMARGIN", new_y="NEXT")
pdf.cell(0, 7, "LinkedIn: linkedin.com/in/chaturvedhinarsimha", new_x="LMARGIN", new_y="NEXT")
pdf.ln(5)

pdf.set_font("Helvetica", "B", 14)
pdf.cell(0, 10, "Skills", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 11)
skills = ["HTML", "CSS", "JavaScript", "Python", "Java", "AI Tools", "Responsive Design"]
for s in skills:
    pdf.cell(0, 7, f"- {s}", new_x="LMARGIN", new_y="NEXT")
pdf.ln(5)

pdf.set_font("Helvetica", "B", 14)
pdf.cell(0, 10, "Projects", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 11)
pdf.cell(0, 7, "Calculator App - HTML, CSS, JavaScript", new_x="LMARGIN", new_y="NEXT")
pdf.cell(0, 7, "To-Do App - HTML, CSS, JavaScript", new_x="LMARGIN", new_y="NEXT")
pdf.cell(0, 7, "Portfolio Website - HTML, CSS, JavaScript", new_x="LMARGIN", new_y="NEXT")
pdf.ln(5)

pdf.set_font("Helvetica", "B", 14)
pdf.cell(0, 10, "Education", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 11)
pdf.cell(0, 7, "Web Development Internship - Current", new_x="LMARGIN", new_y="NEXT")

pdf.output("D:\\PROJECTS\\WEB-DEV-VOC\\ASSIGNMENT2\\resume.pdf")
print("resume.pdf created")
