import sys
from PyPDF2 import PdfReader

if len(sys.argv) != 2:
    print("Usages: python3 extract_pdf_text.py <pdf_path>")
    sys.exit(1)

pdf_path = sys.argv[1]
reader = PdfReader(pdf_path)

for page in reader.pages:
    text = page.extract_text()
    if text:
        print(text)