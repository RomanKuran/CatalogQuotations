<div class="modal fade" id="modalListServices" tabindex="-1" aria-labelledby="modalListServicesLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalListServicesLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                @foreach ($services as $service)
                    <button class="btn btn-success js-open-modal-service"
                        data-placeholder="{{ $service->placeholder }}"
                        data-service-name="{{ $service->service }}">{{ $service->service }}</button>
                @endforeach
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
