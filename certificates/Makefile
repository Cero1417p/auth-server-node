.PHONY: all

all: cert.pem

cert.pem: key.pem csr.pem
	openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

csr.pem: key.pem
	openssl req -new -key key.pem -out csr.pem

key.pem:
	openssl genrsa -out key.pem

clean:
	rm -f key.pem csr.pem cert.pem
