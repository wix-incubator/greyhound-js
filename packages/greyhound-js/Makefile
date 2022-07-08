.POSIX:
.SUFFIXES:

all: build

build: test

test: compile
	node "./test/it.js"

compile: genpb
genpb: node_modules
	./node_modules/.bin/grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:"./" \
		--grpc_out=grpc_js:"./" \
		"./proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar.proto" "./proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecaruser.proto"
node_modules: package.json 
	npm install

clean: clean_modules clean_pb
clean_pb:
	rm -f "$$(find "./proto" -type f -name "*_grpc_pb.js" -o -name "*_pb.js")"
clean_modules:
	rm -rf "./node_modules"
	rm -f "./package-lock.json"

echo_debug:
	@echo "${debug}"

echo_shell:
	@echo "$(SHELL)"

debug = false
